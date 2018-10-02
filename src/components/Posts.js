import React, { Component } from 'react'
import PropType from 'prop-types';
//get the post form the store
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postAction';

 class Posts extends Component {
//when the component mount//安裝 will run
  componentWillMount(){
     this.props.fetchPosts();
   }
   //when receives//接到 a new property from state will run
   componentWillReceiveProps(nextProps){
     if(nextProps.newPost){//nextProps裡是否有nextPost
      this.props.posts.unshift(nextProps.newPost)//add in beginning 
     }//this.props.posts euqal all state  /Posts /line 58
   }
  //  constructor(props){
  //    super(props);
  //    this.state={
  //      posts:[]
  //    }
  //  }

  //  //when it mounts make the api to fecth my posts
  //  componentWillMount(){
  //    //run right away when the component mount//安裝
  //    fetch('https://jsonplaceholder.typicode.com/posts')
  //    .then(res=> res.json())
  //    .then(data=> this.setState({posts:data}));
  //  }
 
  render() {
    const postItems =this.props.posts.map(post=>(
      <div key={post.id}>
        <h1>{post.title} </h1>
        <p>{post.body}</p>

      </div>
    ))

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}
Posts.PropType ={
  fetchPosts:PropType.func.isRequired,
  posts:PropType.array.isRequired,
  newPost :PropType.object
}
const mapStateToProps =state=>({
  //call post because the|reducers/index.js| call post
  //call items because the|postReducer.js| call items
  posts: state.post.items ,
  newPost:state.post.item
   //*mapStateToProps*when the book refesh books state with update 
})

export default connect(mapStateToProps,{fetchPosts})(Posts)