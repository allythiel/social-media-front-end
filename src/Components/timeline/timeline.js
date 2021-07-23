import React from 'react';
import UserPost from './userPost/UserPost';
import './timeline.css';

const Timeline = () => {
    return (
        <div className='timeline'>
          <h3>Timeline</h3>
          <UserPost name='Bradley Cooper' />
          <UserPost name='Sheila Thomas' />
          <UserPost name='Tanya Makeover' />
          <UserPost name='Sara Fisher' />

        </div>
    )
}

export default Timeline;
