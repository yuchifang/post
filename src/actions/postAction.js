import {FETCH_POSTS,NEW_POST} from './types';
//equal
export const fetchPosts =()=>dispatch=>{//all thing is an action
   console.log('postAction fectching');
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=> res.json())//確認是json string
      .then(posts=>
        dispatch({
          //dispath the data to the reducer
          type:FETCH_POSTS,
          payload:posts//data
      })
      
      //dispath is the only way to update the data

    );//dispatch fetch post to the reducer
};


// export function fetchPosts(){
//   return function(dispatch){
//     //dispatch 
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res=> res.json())
//     .then(post=> dispatch({
//       //dispath the data to the reducer
//       type:FETCH_POSTS,
//       payload:posts
//     }));//will be reduced(歸納) inside of postReducer function
   
//   }
// }

export const createPost =(postData)=>dispatch=>{//all thing is an action
  console.log('postAction createPost');
 fetch('https://jsonplaceholder.typicode.com/posts',{
   method:'POST',
   headers:{
     'content-type':'application/json'
   },
   body: JSON.stringify(postData)
 })
     .then(res=> res.json())
     .then(post=>
       dispatch({
         //dispath the data to the reducer
         type:NEW_POST,
         payload:post
     })
   );//dispatch fetch post to the reducer
};