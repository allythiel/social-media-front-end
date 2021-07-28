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
      password: '',
   })

   const [loggedInUser, setLoggedInUser] = useState(null);
   const [currentUser, setCurrentUser] = useState(null);
   const [newUserData, setNewUserData] = useState(null);
   const [logonData, setlogonData] = useState(null);
   const [loggedIn, setLoggedIn] = useState(false);
   const [register, setRegister] = useState(false);
   const [messageText, setMessageText] = useState('');
   const [showMessageBar, setShowMessageBar] = useState(false);


   const aboutme = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos illum accusantium. Animi, consequuntur assumenda!';
   const name = 'Jaslyn Thomas';

   /**********************************************************
    *  API ROUTES
    **********************************************************/
   const apiPath = 'http://localhost:5000/api/users';

   const getAllUsers = async () => {
      await axios.get(apiPath).then((res) => { setUsers(res.data); console.log(res.data); }).catch((err) => console.log(err));
   }


   const postNewUser = async (newUser) => {
      await axios.post(apiPath, newUser).then((res) => { console.log(res.data); }).catch(err => {
         if (err.response.status === 400) {
            console.log(err.response.data)
            setMessageText(err.response.data)
            setShowMessageBar(true);
            // client received an error response (5xx, 4xx)
         } else {
            setMessageText('Oops! Something went wrong... Please try to register again.');
            setShowMessageBar(true);
            // anything else
         }
      })
   }


   const postUserLogin = async (email) => {
      await axios.post(`${apiPath}/login`, email).then((res) => { setCurrentUser(res.data); setLoggedInUser(res.data) }).catch((err) => { console.log(err); });
   }


   
   /**********************************************************
    *  USE EFFECTS
    **********************************************************/
   useEffect(() => {
      getAllUsers();
   }, [])

   useEffect(() => {
      postNewUser(newUserData);
   }, [newUserData])

   useEffect(() => {
      postUserLogin(logonData);
   }, [logonData])


   /**********************************************************
   *  EVENT HANDLERS
   ***********************************************************/
   const handleLoginAvatarClick = () => {
      alert('avatar click');
      setLoggedIn(false);
      setCurrentUser(null);
      setLoggedInUser(null);
   }

   const handleCloseMessageBar = () => {
      setShowMessageBar(false);
      setMessageText('');
   }

   const handleUserChange = (event) => {
      event.persist();
      setNewUser(prevNewUser => ({ ...prevNewUser, [event.target.name]: event.target.value }));
      console.log(newUser);
   }

   const handleUserSubmit = (event) => {
      event.preventDefault();
      if (register) {
         setNewUserData(newUser);  // change triggers post new user Use Effect
         setRegister(false);     // end registration mode
         setNewUser({
            name: '',
            email: '',
            password: '',
         });
      } else {
         setlogonData({ email: newUser.email })
         setLoggedIn(true);
         setNewUser({
            name: '',
            email: '',
            password: '',
         });
         document.getElementById('app').style.backgroundColor = '#999999';
         //alert('submit form');
      }
   }



   console.log(users);
   console.log('current user: ', currentUser);
   console.log('loggedInUser: ', loggedInUser);

   return (
      <div id='app' className='App'>
         <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} handleLoginAvatarClick={handleLoginAvatarClick} />
         {showMessageBar && <MessageBar messageText={messageText} setShowMessageBar={setShowMessageBar} handleCloseMessageBar={handleCloseMessageBar} />}
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
