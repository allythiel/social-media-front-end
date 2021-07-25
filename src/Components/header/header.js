import React from 'react';
import Banner from '../banner/Banner';
import './header.css';

const Header = (props) => {
   return (
      <div className='header'>
         <Banner loggedIn={props.loggedIn} />
      </div>
   )
}

export default Header;
