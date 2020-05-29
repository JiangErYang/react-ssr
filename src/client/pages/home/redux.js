import { channelList, homeFlowList, messageList } from './data';

//action type
const actionType = 'action_for_home_page';

// 获取异步信息
export const getPageData = () => {
  return (dispatch) => {
    return new Promise(resolve=>{
      setTimeout(() => {
        resolve();
        dispatch({
          type: actionType,
          payload: {
            channelList,
            homeFlowList,
            messageList
          }
        });
      }, 100);
    })
  };
};


// 设置同步信息
export const setSyncState = (data) => {
  return (dispatch) => {
    dispatch({
      type: actionType,
      payload: data
    });
  };
};


//默认数据
const defaultState = {
  homeNavType: 1,
  homeFlowListScrollTop: 0,
  channelList: [],
  homeFlowList: [],
  messageList: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export const redux = {
  stateKey: 'homePage',
  reducer
};