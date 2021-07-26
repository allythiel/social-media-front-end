import React from 'react'
import LikesBar from './likesBar/likesBar';
import './userPost.css';

const UserPost = (props) => {
   return (
      <div className='user-post'>
         <p>
            <span>{`${props.name} >>`}&nbsp;&nbsp;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor ratione sed assumenda, eligendi quia harum, commodi molestiae dolores <i><b>~3 hours ago</b></i></p>
         <div>
            <LikesBar /><button className="button-sm">Remove</button>
         </div>
      </div>
   )
}

export default UserPost;
