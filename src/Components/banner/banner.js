import React from 'react';
import BannerActionBar from '../bannerActionBar/BannerActionBar';
import './banner.css';

const Banner = () => {
    return (
        <div className='banner'>
          <div><h1>Weave<span>Social</span></h1></div>
          <div>
             <BannerActionBar />
          </div>
          
        </div>
    )
}

export default Banner;
