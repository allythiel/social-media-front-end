import React from 'react'
import AboutMe from '../aboutMe/aboutMe'
import './userInfo.css';

const UserInfo = (props) => {
   return (
      <div className='user-info'>
         <h2>{props.name}</h2>
         <AboutMe aboutme={props.aboutme} />
      </div>
   )
}

export default UserInfo;
