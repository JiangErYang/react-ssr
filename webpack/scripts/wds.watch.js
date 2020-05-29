// 启动wds服务

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const opn = require('opn');
const proConfig = require('../../src/share/pro-config');

const WDS_PORT = proConfig.wdsServerPort; // wds服务端口
const NODE_SERVER_PORT = proConfig.nodeServerPort; // node服务端口
let compilationTime = 0; // 编译次数

// webapck配置
const clientConfig = require('../webpack.dev.config');

// wds配置
const getWdsConfig = require('./wds.config');

// 创建 wds 服务
function createWdsServer(port) {

  // 创建webpack打包器
  const compiler = webpack(clientConfig);

  compiler.hooks.done.tap('done', function () {
    //第一次编译完成的时，自动打开浏览器
    if (compilationTime === 0){
      //默认谷歌 有需要请自行修改
      //opn(url, { app: 'firefox' });
      opn(`http://localhost:${NODE_SERVER_PORT}/`).catch(err => { console.log(err); });
    }
    compilationTime += 1;
  });

  return new WebpackDevServer(compiler, getWdsConfig(port, clientConfig.output.publicPath));
}

// 启动WebpackDevServer.
const devServer = createWdsServer(WDS_PORT);
devServer.listen(WDS_PORT, 'localhost', err => {
  if (err) {
    return console.log(err);
  }
  console.log('\n 🤔启动开发服务...');
});
