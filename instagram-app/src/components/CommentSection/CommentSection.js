import React from 'react';
import './CommentSection.css';
import Comment from './Comment'

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

export default CommentSection;