import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

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
      <h3>{props.data.likes} likes</h3>
      <CommentSection comments={props.data.comments} />
      <form>
        <input>
        </input>
      </form>
    </div>
  )
}

export default Post