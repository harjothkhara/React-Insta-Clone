import React from 'react';
import './App.css';

//importing dummy data
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar'

class App extends React.Component {
  constructor () {
    super();
    this.state= {
      data: dummyData
    };
  }

render() {
  return (
    <div className="App" >
      <SearchBar />
      <PostContainer data = {this.state.data} />
      {/* // username={this.state.data.username}
      //     thumbnailUrl={this.state.data.thumbnailUrl}
      //     imageUrl={this.state.data.imageUrl}
      //     likes={this.state.data.likes}
      //     timestamp={this.state.data.timestamp}
      //     comments={this.state.data.comments} */}

  </div>
  );
 }
}

export default App;