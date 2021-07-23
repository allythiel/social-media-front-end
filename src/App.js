import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Profile from './components/profile/Profile'
import Timeline from './components/timeline/Timeline'
import './App.css'
import FriendsAllUsersList from './components/FriendsAllUsersList/FriendsAllUsersList';


const App = () => {
   const aboutme = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos illum accusantium. Animi, consequuntur assumenda!'
   
   const name='Jaslyn Thomas'

   return (
      <div className='App'>
         <Header/>
         <div className='content'>
            <div>
               <div>
                  <Profile aboutme={aboutme} name={name}/>
               </div>
               <div>
                  <Timeline/>
               </div>
               <div>
                  <FriendsAllUsersList/>
               </div>
            </div>
         </div>
         <Footer/> </div>
   )
}

export default App
