import React from 'react'
import LikesBar from './likesBar/likesBar';
import './userPost.css';

const UserPost = (props) => {
   return (
      <div className='user-post'>
         <p>
            <span>${`Billy Bob >>`}&nbsp;&nbsp;</span>{props.userPost.text}<i><b>~3 hours ago</b></i></p>
         <div>
            <LikesBar userPost={props.post} /><button className="button-sm">Remove</button>
         </div>
      </div>
   )
}

export default UserPost;
