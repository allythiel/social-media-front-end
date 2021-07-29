import React from 'react'
import Profile from '../profile/profile'
import Timeline from '../timeline/timeline'
import FriendsAllUsersList from '../friendsAllUsersList/friendsAllUsersList';
import './main.css'


const Main = (props) => {
   return (
      <div className='main'>
         <div>
            <div>
               <Profile aboutme={props.aboutme} name={props.name} />
            </div>
            <div>
               {/* <Timeline postings={props.postings} setPostings={props.setPostings} newPosting={props.newPosting} setNewPosting={props.setNewPosting} handleNewPostingChange={props.handleNewPostingChange} handleNewPostingSubmit={props.handleNewPostingSubmit} /> */}
               <Timeline postings={props.postings} setPostings={props.setPostings} newPosting={props.newPosting} setNewPosting={props.setNewPosting} handleNewPostingChange={props.handleNewPostingChange} handleNewPostingSubmit={props.handleNewPostingSubmit} />
               <Profile currentUser={props.currentUser} loggedInUser={props.loggedInUser} />
            </div>
            <div>
               <Timeline currentUser={props.currentUser} loggedInUser={props.loggedInUser} />
            </div>
            <div>
               <FriendsAllUsersList friends={props.friends} />
            </div>
         </div>
      </div>
   )
}

export default Main

