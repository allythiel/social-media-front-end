import React from 'react';
import Avatar from './avatar/Avatar';
import UserInfo from './userInfo/UserInfo';
import './profile.css'

const Profile = () => {
    return (
        <div className='profile'>
          <h3>Profile</h3>
          <Avatar />
          <UserInfo />
        </div>
    )
}

export default Profile;
