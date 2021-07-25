import React from 'react'
import Profile from '../profile/Profile'
import Timeline from '../timeline/Timeline'
import FriendsAllUsersList from '../FriendsAllUsersList/FriendsAllUsersList'
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
