import React from 'react';
import './FriendsRequestStatusBar.css';

const FriendsRequestStatusBar = () => {
   return (
      <div className="friend-request-status-bar">
         <p className='button-md'><div className='request-pending'>5</div><div className='request-text'>Friend Request</div></p>
      </div>
   )
}

export default FriendsRequestStatusBar;
