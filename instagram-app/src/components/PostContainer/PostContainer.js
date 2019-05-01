import React from 'react';
import './PostContainer.css';
import Post from './Post';
import PropTypes from 'prop-types';

const PostContainer = props => {
    console.log(props)
  return (
    <div className="post-container">
        {/* creates new posts for each object within data array. */}
      {props.data.map((item, index) => 
      <Post data={props.data[index]} key={index} />
      )}
    </div>
  )
}

PostContainer.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            timestamp: PropTypes.string.isRequired,
            comments: PropTypes.array.isRequired
        })
    )
}

export default PostContainer;
