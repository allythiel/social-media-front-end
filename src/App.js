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
   const [newPosting, setNewPosting] = useState('');
   const [postings, setPostings] = useState(null);


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
         }
      })
   }


   const postUserLogin = async (email) => {
      await axios.post(`${apiPath}/login`, email).then((res) => { setCurrentUser(res.data); setLoggedInUser(res.data) }).catch((err) => { console.log(err); });
   }

   // imported information below (GetPostings and PostNewPosting NEEDS UPDATING)
   const getPostings = async (currentUser) => {
      await axios.get(`${apiPath}/${currentUser}`).then((res) => { setPostings(res.data) }).catch((err) => {console.log(err); });
   }

   //add New Posting
   const postNewPosting = async (data) => {
      await axios.post(`${apiPath}`, data).then((res) => (res.data)).catch((err) => console.log(err));
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

 // get User Posting Feed 
   useEffect(() => {
      getPostings(currentUser);
      console.log('getPostings');
   }, [currentUser])

   /**********************************************************
   *  EVENT HANDLERS
   ***********************************************************/
   const handleLoginAvatarClick = () => {    // Banner component
      //alert('avatar click');
      setLoggedIn(false);
      setCurrentUser(null);
      setLoggedInUser(null);
   }


   const handleCloseMessageBar = () => {     // MessageBar component
      setShowMessageBar(false);
      setMessageText('');
   }


   const handleUserChange = (event) => {     // AppLogin
      event.persist();
      setNewUser(prevNewUser => ({ ...prevNewUser, [event.target.name]: event.target.value }));
      console.log(newUser);
   }


   const handleUserSubmit = (event) => {     // AppLogin
      event.preventDefault();
      if (register) {
         setNewUserData(newUser);   // change triggers post new user actions
         setRegister(false);        // end registration mode
         setNewUser({
            name: '',
            email: '',
            password: '',
         });
      } else {
         setlogonData({ email: newUser.email })   // change triggers user login actions
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

   //handle new posting (needs updating)
   const handleNewPostingSubmit = (event) => {
      event.preventDefault();
      const posting = {
         text: newPosting,
         likes: 0
      }
      postNewPosting(posting);
      console.log(posting);
      console.log('my posts',users[0].posts)
   
   }

   //handle new posting change (needs updating)
   const handleNewPostingChange = (event) => {
      setNewPosting (event.target.value);
   }

      
/////////////// CONSOLE.LOGS /////////////////
   console.log(users);
   console.log('current user: ', currentUser);
   console.log('loggedInUser: ', loggedInUser);


   return (
      <div id='app' className='App'>
         <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} handleLoginAvatarClick={handleLoginAvatarClick} loggedInUser={loggedInUser} />
         {showMessageBar && <MessageBar messageText={messageText} setShowMessageBar={setShowMessageBar} handleCloseMessageBar={handleCloseMessageBar} />}
         <div className='content'>
            {!loggedIn && <AppLogin newUser={newUser} handleUserChange={handleUserChange} handleUserSubmit={handleUserSubmit} handleNewPostingChange={handleNewPostingChange} handleNewPostingSubmit={handleNewPostingSubmit} newPosting={newPosting} setNewPosting={setNewPosting} postings={postings} setPostings={setPostings}
               register={register} setRegister={setRegister} setLoggedIn={setLoggedIn} />}
            {(loggedIn && currentUser) && <Main loggedInUser={loggedInUser} currentUser={currentUser} aboutme={aboutme} name={name} friends={friends} />}
         </div>
         {/* <Footer /> */}
      </div>
   )
}


export default App;
