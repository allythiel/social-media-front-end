import React from 'react';
import BannerActionBar from '../bannerActionBar/BannerActionBar';
import './banner.css';
import logo from '../../images/weave-social-logo.svg';

const Banner = (props) => {
   return (
      <div className='banner'>
         <div>
            <div><img src={logo} alt="" /></div>
            <div><h1>Weave<span>Social</span></h1></div>
         </div>
         <div>
            {props.loggedIn && <BannerActionBar loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />}
         </div>
      </div>
   )
}

export default Banner;
