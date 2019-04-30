import React from 'react';
import './App.css';

//importing dummy data
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor () {
    super();
    this.state={
      posts: dummyData
    };
  }

render () {
  return (
    <div className="App" >
    
    <PostContainer post={this.state.posts} />

  </div>
  );
 }
}

export default App;
