import React from 'react'
import './createPost.css'

const CreatePost = (props) => {
   // handle new post submission


   return (
      <div className='create-post'>
         <div className='add-post'>
            <form onSubmit={
               (event) => {
                  props.handleNewPostingSubmit(event)
               }
            }>
               <textarea name='posting'
                  rows={3}
                  onChange={props.handleNewPostingChange}
                  value={props.newPosting}
                  placeholder='Add a new posting ...'></textarea>
            </form>
         </div>
      </div>
   )
}

export default CreatePost