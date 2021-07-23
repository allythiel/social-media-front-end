import React, {useState, useEffect } from 'react'
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Profile from './Components/profile/Profile';
import FriendsList from './Components/friendsAllUsersList/friendsList/friendsList';
import Timeline from './Components/timeline/timeline';

const App = () => {
   const [logIn, setLogIn] = useState();
   const [logOut, setLogOut] = useState();
   const [registration, setRegistration] = useState();
   const [profileEdit, setProfileEdit] = useState();
   const [mainView, setMainView] = useState();


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
