import React from 'react';

const Comment = props => {
    console.log(props);
    return (
        <div>
            {/* <p>Comment</p> */}
            {/* <p>username</p>
            <p>text</p> */}
            <h4>{props.info.username}</h4>
            <p>{props.info.text}</p>
     
        </div>
    )
}

export default Comment;