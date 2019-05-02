import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import authenticate from './components/Authentication/authenticate';
import Login from './components/Login/Login';



class App extends React.Component {
  constructor () {
    super();
    this.state= {
      // data: dummyData,
      data: [],
      search: ''
    };
  }


render() {
  return (
    <div className="App" >
      <PostsPage />
  </div>
  );
 }
}

export default authenticate(App)(Login);