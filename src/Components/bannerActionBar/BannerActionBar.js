import React from 'react';
import './bannerActionBar.css';
import loginAvatar from '../../images/login-placeholder.png';

const BannerActionBar = () => {
   return (
      <div className="banner-action-bar">
         <div className='button-md'>
            <div className='request-pending'>25</div>
            <div className='request-text'>Friend Request</div>
         </div>
         <div className="login"><img src={loginAvatar} alt="" /></div>
      </div>
   )
}

export default BannerActionBar;
