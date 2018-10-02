import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createPost} from '../actions/postAction';

 class PostForm extends Component {
   constructor(props){
     super(props);
     this.state={
       title:'',
       body:''
     };
       }
 
   onChange=(e)=>{
     this.setState({[e.target.name]:e.target.value});
   }
   onSubmit=(e)=>{
     e.preventDefault();
     const post={
       title: this.state.title,
       body: this.state.body
     };
      this.props.createPost(post);
      //pass in the post object in /PostFrom line 9
      //傳遞post物件 在PostFrom line 9 使用createPost 方法
    }
  //    fetch('https://jsonplaceholder.typicode.com/posts',{
  //      method: 'POST',
  //      headers:{
  //        'content-type':'application/json'
  //      },
  //      body:JSON.stringify(post)//確認是json string
  //    })
  //    .then(res=>res.json())//want json style data
  //    .then(data=>console.log(data));
  //  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label><br />
            <input type="text" name="title" onChange={this.onChange}value={this.state.title} />
          </div>
          <div>
            <label>Body: </label><br />
            <textarea name="body"  onChange={this.onChange} value={this.state.body}/>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
PostForm.propTypes={
  createPost:PropTypes.func.isRequired
}
export default connect (null,{createPost})(PostForm);
