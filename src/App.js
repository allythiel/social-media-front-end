import React from 'react'
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Profile from './Components/profile/Profile';
import FriendsList from './Components/friendsAllUsersList/friendsList/friendsList';
import Timeline from './Components/timeline/timeline';

const App = () => {
   return (
      <div className='App'>
         <Header />
         <div className="content">
            <Profile />
            <Timeline />
            <FriendsList />
         </div>
         <Footer />
      </div>
   )
}

export default App
