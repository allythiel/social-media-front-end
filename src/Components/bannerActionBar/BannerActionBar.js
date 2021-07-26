import React from 'react';
import './bannerActionBar.css';
import loginAvatar from '../../images/login-placeholder.png';

const BannerActionBar = (props) => {
   return (
      <div className="banner-action-bar">
         <div className="user-info">Hi, Jaslyn</div>
         <div className='button-md'>
            <div className='request-pending'>99</div>
            <div className='request-text'>Friend Request</div>
         </div>
         <div className="login"><img onClick={()=>{props.setLoggedIn(false)}} src={loginAvatar}
               alt="" /></div>
      </div>
   )
}

export default BannerActionBar;
