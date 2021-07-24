import React from 'react';
import FriendsRequestStatusBar from '../FriendsRequestStatusBar/FriendsRequestStatusBar';
import './banner.css';

const Banner = () => {
    return (
        <div className='banner'>
          <div><h1>Weave<span>Social</span></h1></div>
          <div>
             <FriendsRequestStatusBar />
          </div>
          
        </div>
    )
}

export default Banner;
