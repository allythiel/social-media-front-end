import React from 'react'
import FriendsList from './friendsList/friendsList';
import './friendsAllUsersList.css';

const FriendsAllUsersList = (props) => {
   return (
      <div className='friends-all-users-list'>
         <FriendsList friends={props.friends} />
      </div>
   )
}

export default FriendsAllUsersList
