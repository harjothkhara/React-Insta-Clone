import React from 'react';
import './PostContainer.css';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends React.Component {
    constructor() {
    super();
    this.state = {
        data: [],
        search: ''
    }
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
  event.preventDefault();

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

  if (this.state.search === '') {
      this.setState({
          data: dummyData
      })
  }

 }

 render() {
    return (
      <div className="App" >
        <SearchBar performSearch={this.performSearch} 
        handleChanges={this.handleChanges} search={this.state.search}/>
        <PostContainer data = {this.state.data} />
    </div>
    );
   }

}


export default PostsPage;