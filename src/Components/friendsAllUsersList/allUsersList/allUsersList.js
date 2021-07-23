import React from 'react';
import FriendsList from '../friendsList/FriendsList';
import './allUsersList.css';

const AllUsersList = () => {
    return (
        <div className='all-users-list'>
            <FriendsList />
        </div>
    )
}

export default AllUsersList;
