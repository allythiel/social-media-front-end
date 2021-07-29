import React, { useState } from 'react';
import Avatar from './avatar/avatar';
import UserInfo from './userInfo/userInfo';
import './profile.css'

const Profile = (props) => {
   const [editMode, setEditMode] = useState(false);


   return (
      <div className='profile'>
         <h3>Profile</h3>
         {/* display profile */}
         <Avatar currentUser={props.currentUser} />
         <UserInfo currentUser={props.currentUser} />
         {(!editMode && (props.loggedInUser.email === props.currentUser.email)) && <button className="button-md" onClick={() => { setEditMode(true) }}>Edit Profile</button>}

         {/* edit profile mode */}
         {(editMode && (props.loggedInUser.email === props.currentUser.email)) && <form onSubmit={(event) => { event.preventDefault() }}>
            <input type="text" name='name' placeholder='Your name' value={props.editProfile.name} /><br />
            <input type="text" name='aboutme' placeholder='Tell us all about you' value={props.editProfile.aboutMe} />
         </form>}
         {(editMode && (props.loggedInUser.email === props.currentUser.email)) && <button className="button-md" onClick={() => { setEditMode(false) }}>Save Changes</button>}
      </div>
   )
}

export default Profile;
