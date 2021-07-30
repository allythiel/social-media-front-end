import  {useState} from 'react'
 import React from 'react';
import './allUsersList.css';

const AllUsersList = (props) => {
   

   // const [tempUser, setTempUser] = useState(null); 
   // const changeUser = (user) => {
   //    setTempUser (user)
   //    console.log('tempUser', tempUser)  
   // }
//////////////////////////////////////////////////////

   const users = props.users.map((user, index) => {
      return (
         <li key={index}>
         <div className="avatar-inline"><img src={user.avatar} alt=''></img></div>
         <div onClick={() => { props.changeUser(user)}}><div className='friend-name'>{user.name}</div></div>
      </li>
      )
   })
   return (
      <div className='friends-list'>
         <h3>All user List</h3>
         <ul>
            {users} 
         </ul>
      </div>
   )
}

export default AllUsersList;