import React from 'react';

const Post = props => {
  console.log(props)
  return (
  // <p>Post</p>
    <div>
      <img src={props.data.thumbnailUrl} />
      <h2>{props.data.username}</h2>
      {/* <img src={props.data.imageUrl} /> */}
    </div>
  )}

export default Post