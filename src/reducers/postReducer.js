import {FETCH_POSTS,NEW_POST} from '../actions/types';

const initialState={
  //represent the posts about action where put the fetch request
  items:[],
  //represesnt the single post we add when we get the response back
  item:{}
}
//reducer have two thing current state , action
// evaluate what type we dealing with
export default function(state =initialState,action){
  switch (action.type) {  
    case FETCH_POSTS:
    console.log('postReducer')
     return{
       ...state,//current state
       items:action.payload//add
     };//return current state + action
    case NEW_POST:
    //onsole.log('postReducer')
     return{
       ...state,//current state
       item:action.payload
       //add 資料 payload/see58:48

     };//return current state + action
    default:
     return state;
  }//implement (裝備)this in post component use connect  (mapStateToProps)
}