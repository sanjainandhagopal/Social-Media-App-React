import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../context/DataContext'

const PostPage = () => {
  const {posts} = useContext(DataContext)
  const {id} = useParams()
  const post = posts.find(post => 
    (post.id).toString() === id
  )

  const today = new Date()
  const date = today.getDate()
  const month = today.getMonth()+1
  const year = today.getFullYear()
  const currentDate = `${date}/${month}/${year}`

  return (
    <article className="post">
        <h2>{post.title}</h2>
        <p className="postDate">{currentDate}</p>
        <p className="postBody">{post.body}</p>
    </article>
  )
}

export default PostPage