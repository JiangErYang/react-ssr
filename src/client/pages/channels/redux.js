import { channelList } from './data';

//action type
const actionType = 'action_for_channels_page';

// 获取异步信息
export const getPageData = () => {
  return (dispatch) => {
    return new Promise(resolve=>{
      setTimeout(() => {
        resolve();
        dispatch({
          type: actionType,
          payload: {
            channelList
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
  channelList: []
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
  stateKey: 'channelsPage',
  reducer
};