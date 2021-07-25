import React from 'react';
import './appLogin.css';


const AppLogin = (props) => {
   const changeAppBackground = () => document.getElementById('app').style.backgroundColor = '#999999';
   return (
      <div className='app-login'>
         <div className='login-form'>
            {!props.register ? <h3>Login</h3> : <h3>Registration</h3>}
            <form onSubmit={(event) => { event.preventDefault() }}>
               {
                  props.register && <input type='text' name='fullname' value='Craig Satchell' placeholder='Full Name' />
               }<br />
               <input type='email' name='email' placeholder='Email' value='craig.satchell@gmail.com' /><br />
               <input type='password' name='password1' placeholder='Password' value='password' /><br />
               {props.register && <input type='password' name='password2' placeholder='Password' value='password' />}<br />
               <div className="login-action-bar">{!props.register && <button className="button-md register" onClick={() => { props.setRegister(true) }}>Register</button>}{!props.register && <button className="button-md login" onClick={() => { props.setLoggedIn(true); changeAppBackground() }}>Login</button>}{props.register && <button className='button-md' onClick={() => { props.setRegister(false) }}>Submit</button>}</div>
            </form>
         </div>
      </div>
   )
}

export default AppLogin;
