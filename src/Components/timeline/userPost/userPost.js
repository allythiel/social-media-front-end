import React from 'react'
import LikesBar from './likesBar/likesBar';
import './userPost.css';

const UserPost = (props) => {

   return (
      <div className='user-post'>
         <p>
            <span>{props.currentUser.name}&nbsp;&nbsp;</span>{props.userPost.post}<i><b>~3 hours ago</b></i></p>
         <div>
            <LikesBar userPost={props.post} handleLike={props.handleLike} postings={props.postings} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} /><button className="button-sm">Remove</button>
         </div>
      </div>
   )
}

export default UserPost;
