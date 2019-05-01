import React from 'react';
import './CommentSection.css';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentSection = props => {
    console.log(props)
  return ( 
    // <p>I love this so much!</p>
    // <Comment />

    // CommentsSection amd Comments replicating 
    // accross posts
    props.comments.map((item, index) => 
    <Comment key={index} info={item} />
    )
  )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}

export default CommentSection;