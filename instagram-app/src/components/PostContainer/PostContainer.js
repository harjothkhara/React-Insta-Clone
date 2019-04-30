import React from 'react';
import './PostContainer.css';
import Post from './Post';

const PostContainer = props => {
    console.log(props)
  return (
    <div>
      {props.data.map((item, index) => <Post data={props.data[index]} key={index} />)}
    </div>
  )
}

export default PostContainer;
