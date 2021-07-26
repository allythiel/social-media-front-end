import React, { useState } from 'react'
import Header from './components/header/header'
import Main from './components/main/main';
import AppLogin from './components/appLogin/appLogin';
import './App.css'

/**************************************************** */
// Remove after production state is created (For demo)
import myFriends from './_demoData/friends.js'
/**************************************************** */

const App = () => {
   const [friends, setFriends] = useState(myFriends);
   const [loggedIn, setLoggedIn] = useState(false);
   const [register, setRegister] = useState(false);
   const [registering, setRegistering] = useState(false);

   const aboutme = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos illum accusantium. Animi, consequuntur assumenda!';
   const name = 'Jaslyn Thomas';

   return (
      <div id='app' className='App'>
         <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
         <div className='content'>
            {(!loggedIn || registering) && <AppLogin register={register} registering={registering} setRegistering={setRegistering} setRegister={setRegister} setLoggedIn={setLoggedIn} />}
            { loggedIn && <Main aboutme={aboutme} name={name} friends={friends} /> }
         </div>
         {/* <Footer /> */}
      </div>
   )
}

export default App
