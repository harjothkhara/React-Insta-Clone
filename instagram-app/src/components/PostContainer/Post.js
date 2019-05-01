import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import Proptypes from 'prop-types';
import './PostContainer.css';

const Post = props => {
  console.log(props)
  return (
    // <p>Post</p>
    <div className="post">
      <div className="post-header">
        <img className="thumbnail" src={props.data.thumbnailUrl} alt="profile thumbnail"/>
        <h2>{props.data.username}</h2>
      </div>
      <img className="post-img" src={props.data.imageUrl} alt="post" />
      
     <div className="post-footer">
        <h3>{props.data.likes} likes</h3>
        <CommentSection comments={props.data.comments} timestamp={props.data.timestamp} />
      </div>
  </div>    
  )
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