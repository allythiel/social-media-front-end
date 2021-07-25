import React, {useState} from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main';
import Login from './components/login/Login';
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
            <Main aboutme={aboutme} name={name} friends={friends} />
         </div>
         <Footer/>
      </div>
   )
}

export default App
