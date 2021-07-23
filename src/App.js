import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Profile from './components/profile/Profile'
import FriendsList from './components/FriendsAllUsersList/friendsList/FriendsList'
import Timeline from './components/timeline/Timeline'
import './App.css'


const App = () => {

   return (
      <div className='App'>
         <Header/>
         <div className='content'>
            <div>
               <Profile />
            </div>
            <div>
               <Timeline/>
            </div>
            <div>
               <FriendsList/>
            </div>
         </div>
         <Footer/>
      </div>
   )
}

export default App
