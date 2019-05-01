import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

const Comment = props => {
    console.log(props);
    return (
        <div>
            {/* <p>Comment</p> */}
            {/* <p>username</p>
            <p>text</p> */}
          <div className="comment">
            <h4>{props.info.username}</h4>
            <p>{props.info.text}</p>
           </div>  
        </div>
    )
}

Comment.propTypes = {
    info: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment;