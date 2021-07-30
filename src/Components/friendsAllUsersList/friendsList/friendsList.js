import React from 'react';
import './friendsList.css';

const FriendsList = (props) => { 
   
   const friends = props.friends.map((friend, index) => {
      return (
         <li key={index}>
         <div className="avatar-inline"><img src={friend.avatarURL} alt=''></img></div>
         <div className='friend-name'>{friend.name}</div>
      </li>
      )
   })
   return (
      <div className='friends-list'>
         <h3>Friends List</h3>
         <ul>
            {friends}
         </ul>
      </div>
   )
}

export default FriendsList;
