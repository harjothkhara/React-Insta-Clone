import React from 'react';
import './PostContainer.css';
import Post from './Post';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const PostWrapper = styled.div`
    width: 604px;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
`;


const PostContainer = props => {
    console.log(props)
  return (
    <PostWrapper>
        {/* creates new posts for each object within data array. */}
      {props.data.map((item, index) => 
      <Post data={props.data[index]} key={props.data[index].timestamp} />
      )}
    </PostWrapper>
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
