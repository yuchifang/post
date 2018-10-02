import React, { Component } from 'react';

import './App.css';
import {Provider} from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store';



class App extends Component {
  render() {
    return (//Provider take store
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
           
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PostForm />
          <hr/>
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
