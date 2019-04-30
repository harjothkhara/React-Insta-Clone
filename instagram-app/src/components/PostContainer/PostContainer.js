import React from 'react';
import './PostContainer.css';
import Post from './Post';

const PostContainer = props => {
    console.log(props)
  return (
    <div>
        {/* creates new posts for each object within data array. */}
      {props.data.map((item, index) => <Post data={props.data[index]} key={index} />)}
    </div>
  )
}

export default PostContainer;
