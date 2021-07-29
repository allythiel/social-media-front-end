import React, { useState } from 'react';
import Avatar from './avatar/avatar';
import UserInfo from './userInfo/userInfo';
import './profile.css'

const Profile = (props) => {
   const [editProfile, setEditProfile] = useState(false);

   return (
      <div className='profile'>
         <h3>Profile</h3>
         <Avatar currentUser={props.currentUser} />
         <UserInfo currentUser={props.currentUser} />
         {(!editProfile && (props.loggedInUser.email === props.currentUser.email)) && <button className="button-md" onClick={() => { setEditProfile(true) }}>Edit Profile</button>}
         {(editProfile && (props.loggedInUser.email === props.currentUser.email)) &&<button className="button-md" onClick={() => { setEditProfile(false) }}>Save Changes</button>}
      </div>
   )
}

export default Profile;
