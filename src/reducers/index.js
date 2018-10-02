import {combineReducers} from 'redux';
import postReducer from './postReducer';

export default combineReducers({
  post:postReducer
  //call postreducer post 宣告postreducer為post
});
