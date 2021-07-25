import React from 'react';
import './login.css';


const Login = (props) => {
   return (
      <div className='login'>
         <div className='login-form'>
            <h3>Login</h3>
            <form>
               {
               props.register && <input type='text' name='fullname' value='' placeholder='Full Name'/>
               }
               <input type='email' name='email' placeholder='Email' value=''/>
               <input type='password' name='password1' placeholder='Password' value='' />
               {
               props.register && <input type='password' name='password2' placeholder='Password' value=''/>
               }
               <div className="login-action-bar"><button className="button-med register"></button>Register{!props.register && <button className="button-med login">Login</button>}</div>
            </form>
         </div>
      </div>
   )
}

export default Login;
