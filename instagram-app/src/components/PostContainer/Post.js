import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import Proptypes from 'prop-types';
import './PostContainer.css';
import styled from 'styled-components';

class Post extends React.Component {S
  constructor(props) {
  super(props);
  this.props = props;
  this.state = {
    username: props.data.username,
    thumbnailUrl: props.data.thumbnailUrl,
    imageUrl: props.data.imageUrl,
    likes: props.data.likes,
    timestamp: props.data.timestamp,
    comments: props.data.comments
    }  
  }

  likeIncrement = () => {
    this.setState({
      likes: this.state.likes+=1
    })
    console.log(this.state)
  }
  


render(){

  return (
    <div className="post">
      <div className="post-header">
        <img className="thumbnail" src={this.state.thumbnailUrl} alt="profile thumbnail"/>
        <h2>{this.state.username}</h2>
      </div>
      <img className="post-img" src={this.state.imageUrl} alt="post" />   
     <div className="post-footer">
          <img src="https://img.icons8.com/windows/32/000000/like.png" alt="heart" className="logo" onClick={this.likeIncrement} />
          <img src="https://img.icons8.com/windows/32/000000/speech-bubble.png" alt="comment" className="logo" />
        <h3>{this.state.likes} likes</h3>
        <CommentSection comments={this.state.comments} timestamp={this.state.timestamp} />
      </div>
  </div>    
  )
}
  
}

Post.propTypes = {
  data: Proptypes.shape({
    username: Proptypes.string.isRequired,
    thumbnailUrl: Proptypes.string.isRequired,
    imageUrl: Proptypes.string.isRequired,
    likes: Proptypes.number.isRequired,
    timestamp: Proptypes.string.isRequired,
    comments: Proptypes.array.isRequired
  })
}

export default Post