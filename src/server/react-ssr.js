//完成react ssr工作的中间件，组建在服务端渲染的逻辑都在这个文件内

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Provider } from "react-redux";
import StyleContext from 'isomorphic-style-loader/StyleContext';
import routeList from '../client/router/route-config';
import matchRoute from '../share/match-route';
import Root from '../client/router/index';

import getStore from '../share/redux/store';

// 静态路由
import getStaticRoutes from './get-static-routes';

// 导入资源处理库
const getAssets = require('./assets');

export default async (ctx, next) => {

  const path = ctx.request.path;

  // 非法路径
  if (path.indexOf('.') > -1) {
    ctx.body = null;
    return next();
  }

  // 获得静态路由
  const staticRoutesList = await getStaticRoutes(routeList);
  
  // 查找到的目标路由对象
  let targetRoute = await matchRoute(path, staticRoutesList);

  const store = getStore();

  // 服务端请求数据
  const onEnter = targetRoute && targetRoute.component.onEnter;
  
  if (onEnter) {
    await onEnter({ store });
  }

  // 取得所有加载组件的CSS
  const css = new Set();
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getContent()));

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={path}>
        <StyleContext.Provider value={{ insertCss }}>
          <Root routeList={staticRoutesList} />
        </StyleContext.Provider>
      </StaticRouter>
    </Provider>
  );

  const styles = [];
  [...css].forEach(item => {
      const [ mid, content ] = item[0];
      styles.push(`<style id="s${mid}-0">${content}</style>`)
  });

  // 静态资源
  const assetsMap = getAssets();

  // 组件的序列化数据
  const helmet = Helmet.renderStatic();

  ctx.body = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${styles.join('')}
      </head>
      <body>
        <div id="root">${html}</div>
        <textarea id="ssrTextInitData" style="display:none;">${JSON.stringify(store.getState())}</textarea>
      </body>
      ${assetsMap.js.join('')}
    </html>
  `;
  
  await next();
}