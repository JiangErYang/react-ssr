import { combineReducers } from 'redux';

const req = require.context('../../client/pages', true, /redux\.jsx?$/);
const allReducers = [].concat.apply([], req.keys().map(k => req(k).redux || []));

const reducerFonfig = {};
allReducers.forEach(red => {
  reducerFonfig[red.stateKey] = red.reducer;
});

export default combineReducers(reducerFonfig);