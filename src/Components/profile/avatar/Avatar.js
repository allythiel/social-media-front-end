import React from 'react';
import "./avatar.css";
import avatar from '../../../images/avatar-placeholder.png';

const Avatar = () => {
    return (
       <div className='avatar'>
          <div>
            <img src={avatar} alt ='' ></img>
          </div>
        </div>
    )
}

export default Avatar;
