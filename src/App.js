import React from 'react'
import Header from './components/header/header';
import Footer from './components/footer/Footer';
import Profile from './components/profile/Profile';
import FriendsList from './Components/FriendsAllUsersList/friendsList/friendsList';
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
