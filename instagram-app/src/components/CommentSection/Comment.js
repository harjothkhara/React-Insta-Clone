import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CommentWrapper= styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 100%;
`;

const Comment = props => {
    console.log(props);
    return (
        <div>
            {/* <p>Comment</p> */}
            {/* <p>username</p>
            <p>text</p> */}
          <CommentWrapper>
            <h4>{props.info.username}</h4>
            <p>{props.info.text}</p>
           </CommentWrapper>  
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