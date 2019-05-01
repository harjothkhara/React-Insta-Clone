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
      // data: dummyData,
      data: [],
      search: ''
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData});
  }

handleChanges = event => {
  console.log(this.state)

  this.setState({
    search: event.target.value
  })
}

performSearch = event => {
  event.preventDefault()

  const filteredData = this.state.data.filter(item => 
    item.username.includes(this.state.search))

    // filter out any post whose username doesn't match the search term 
    // passed in, then update the state with the resulting data

    // The filter() method creates a new array with all elements that 
    // pass the test implemented by the provided function.

    // The includes() method determines whether an array includes a certain 
    // value among its entries, returning true or false as appropriate.

    this.setState({
      data: filteredData
    })

}


render() {
  return (
    <div className="App" >
      <SearchBar performSearch={this.performSearch} 
      handleChanges={this.handleChanges} search={this.state.search}/>

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