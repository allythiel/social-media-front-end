import React, { useState, useEffect } from 'react'
import Header from './components/header/header'
import Main from './components/main/main';
import AppLogin from './components/appLogin/appLogin';
import MessageBar from './components/messageBar/messageBar';
import axios from 'axios';
import './App.css'

/**************************************************** */
// Remove after production state is created (For demo)
import myFriends from './_demoData/friends.js'
/**************************************************** */

const App = () => {
   const [friends, setFriends] = useState(myFriends);
   const [users, setUsers] = useState(null);
   //const [currentUser, setCurrentUser] = useState(null);
   const [newUser, setNewUser] = useState({
      name: '',
      email: '',
      password1: '',
      password2: ''
   })

   const [loggedInUser, setLoggedInUser] = useState(null);
   const [currentUser, setCurrentUser] = useState(null);
   const [loggedIn, setLoggedIn] = useState(false);
   const [register, setRegister] = useState(false);
   const [messageText, setMessageText] = useState('');
   const [showMessageBar, setShowMessageBar] = useState(true);


   const aboutme = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos illum accusantium. Animi, consequuntur assumenda!';
   const name = 'Jaslyn Thomas';

   /**********************************************************
    *  API ROUTES
    **********************************************************/
   const apiPath = 'http://localhost:5000/api/users';

   const getAllUsers = () => {
      axios.get(apiPath).then((res) => { setUsers(res.data); console.log(res.data) }).catch((err) => console.log(err));
   }

   const postNewUser = (newUser) => {
      axios.post(apiPath, newUser).then((res) => {
         if (res.status === 200) {
            setCurrentUser(res.data);
         } else {
            MessageBar(res.data);
            setShowMessageBar(true);
         }
         console.log(res.data);
      }).catch((err) => console.log(err));
   }


   /**********************************************************
    *  USE EFFECTS
    **********************************************************/
   useEffect(() => {
      getAllUsers();
   }, [])


   /**********************************************************
   *  EVENT HANDLERS
   ***********************************************************/
   const handleUserChange = (event) => {
      event.persist();
      setNewUser(prevNewUser => ({ ...prevNewUser, [event.target.name]: event.target.value }));
      console.log(newUser);
   }

   const handleUserSubmit = (event) => {
      event.preventDefault();
      if (register) {
         setRegister(false);
      } else {
         setLoggedIn(true);
         document.getElementById('app').style.backgroundColor = '#999999';
         alert('submit form');
      }
   }



   console.log(users);

   return (
      <div id='app' className='App'>
         <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
         {showMessageBar && <MessageBar messageText={'This is a sample informational message'} setShowMessageBar={setShowMessageBar} />}
         <div className='content'>
            {!loggedIn && <AppLogin newUser={newUser} handleUserChange={handleUserChange} handleUserSubmit={handleUserSubmit}
               register={register} setRegister={setRegister} setLoggedIn={setLoggedIn} />}
            {loggedIn && <Main aboutme={aboutme} name={name} friends={friends} />}
         </div>
         {/* <Footer /> */}
      </div>
   )
}

export default App
