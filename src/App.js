import React from 'react'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Profile from './components/profile/Profile';
import FriendsList from './components/FriendsAllUsersList/friendsList/FriendsList';
import Timeline from './components/timeline/Timeline';

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
