import React from 'react';
import UserPost from './userPost/UserPost';
import './timeline.css';

const Timeline = (props) => {
   return (
      <div className='timeline'>
         <h3>Timeline</h3>
         <div>
            <UserPost name='Bradley Cooper'/>
            <UserPost name='Sheila Thomas'/>
            <UserPost name='Tanya Makeover'/>
            <UserPost name='Sara Fisher'/>
            <UserPost name='Breanna Stewart'/>
            <UserPost name='Sheila Thomas'/>
            <UserPost name='Lebron James'/>
            <UserPost name='Sara Fisher'/>
         </div>
      </div>
   )
}

export default Timeline;
