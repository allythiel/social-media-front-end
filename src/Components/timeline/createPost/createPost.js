import React from 'react'

const CreatePost = (props) => {
    // handle new post submission


    return (
        <div className='create-posting'>
            <div className='add-post'>
                <form onSubmit={
                    (event) => {
                        props.handleNewPostingSubmit(event)
                    }
                }>
                    <input type='text' name='posting'
                    onChange={props.handleNewPostingChange}
                    value={props.newPosting}
                    placeholder='Add a new posting ...'></input>
                </form>
            </div>
            
        </div>
    )
}

export default CreatePost