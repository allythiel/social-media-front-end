import React, {useState} from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Profile from './components/profile/Profile'
import Timeline from './components/timeline/Timeline'
import FriendsAllUsersList from './components/FriendsAllUsersList/FriendsAllUsersList';
import './App.css'

/**************************************************** */
// Remove after production state is created (For demo)
import myFriends from './_demoData/friends.js'
/**************************************************** */

const App = () => {
   const [friends, setFriends] = useState(myFriends);

   const aboutme = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos illum accusantium. Animi, consequuntur assumenda!';
   const name = 'Jaslyn Thomas';


   return (
      <div className='App'>
         <Header/>
         <div className='content'>
            <div>
               <div>
                  <Profile aboutme={aboutme}
                     name={name}/>
               </div>
               <div>
                  <Timeline/>
               </div>
               <div>
                  <FriendsAllUsersList friends={friends}/>
               </div>
            </div>
         </div>
         <Footer/>
      </div>
   )
}

export default App
