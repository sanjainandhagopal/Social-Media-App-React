import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const NewPost = () => {
  const {handleSubmit, postTitle, setPostTitle, postBody, setPostBody} = useContext(DataContext)
  return (
    <main>
      <h2>New Post</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='newPostTitle'>Title :</label>
        <input
          id='postTitle'
          type='text'
          required
          placeholder='Enter Post Title'
          value={postTitle}
          onChange={(e) => {setPostTitle(e.target.value)}}
        />
        <label className='newPostBody'>Body :</label>
        <textarea
          id='postBody'
          required
          placeholder='Enter Post Content'
          value={postBody}
          onChange={(e) => {setPostBody(e.target.value)}}
        />
        <button type='submit'>Post</button>
      </form>
    </main>
  )
}

export default NewPost