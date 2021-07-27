import React from 'react'
import Profile from '../profile/profile'
import Timeline from '../timeline/timeline'
import FriendsAllUsersList from '../FriendsAllUsersList/friendsAllUsersList';
import './main.css'


const Main = (props) => {
   return (
      <div className='main'>
         <div>
            <div>
               <Profile aboutme={props.aboutme} name={props.name} />
            </div>
            <div>
               <Timeline />
            </div>
            <div>
               <FriendsAllUsersList friends={props.friends} />
            </div>
         </div>
      </div>
   )
}

export default Main
