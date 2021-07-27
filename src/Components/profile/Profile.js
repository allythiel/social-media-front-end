import React from 'react';
import Avatar from './avatar/avatar';
import UserInfo from './userInfo/userInfo';
import './profile.css'

const Profile = (props) => {
    return (
        <div className='profile'>
          <h3>Profile</h3>
          <Avatar />
          <UserInfo aboutme={props.aboutme} name={props.name} />
          <button className="button-md">Edit Profile</button>
        </div>
    )
}

export default Profile;
