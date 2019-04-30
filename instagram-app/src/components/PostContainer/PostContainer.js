import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    console.log(props);
    return (
       <div class = "postContainer"> 
            {/* { {props.posts.map((post) => (
                <Post post={post} />
            ))} } */}



            <div class = "postContent">
                <p>{props.post.username}</p>
            </div>

          <div class = "commentContainer">

          <CommentSection />

          </div>

      </div>
    ) 
}

export default PostContainer;
