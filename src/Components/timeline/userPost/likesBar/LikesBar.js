import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './likesBar.css';

const LikesBar = (props) => {
   return (
      <div className='likes-bar' onClick={()=>{alert('Likes')}}>
         &nbsp;&nbsp;&nbsp;<FavoriteIcon fontSize='small' />&nbsp;Like
      </div>
   )
}

export default LikesBar;
