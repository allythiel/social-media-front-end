import React from 'react';
import BannerActionBar from '../bannerActionBar/BannerActionBar';
import './banner.css';

const Banner = (props) => {
    return (
        <div className='banner'>
          <div><h1>Weave<span>Social</span></h1></div>
          <div>
             {props.loggedIn && <BannerActionBar loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />}
          </div>
          
        </div>
    )
}

export default Banner;
