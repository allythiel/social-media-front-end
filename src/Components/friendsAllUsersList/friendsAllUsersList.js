import  {useState} from 'react'
import FriendsList from './friendsList/friendsList'; 
import AllUsersList from './allUsersList/allUsersList'
import './friendsAllUsersList.css';

const FriendsAllUsersList = (props) => { 
   const [toggle, setToggle] = useState(true);
   
   const changeDisplay = () => {
      setToggle (!toggle)
      console.log(toggle)
   }
   return (
      <div className='friends-all-users-list'> 
      <button className="button-md register" onClick={() => { changeDisplay()}}>Friends/Users</button>
        {toggle && <FriendsList changeUser={props.changeUser} friends={props.friends} />}
        {!toggle && <AllUsersList changeUser={props.changeUser} users={props.users} />}
       
      </div>
   )
}

export default FriendsAllUsersList
