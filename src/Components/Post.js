import { Link } from "react-router-dom"

const Post = ({post}) => {
    const today = new Date()
    const date = today.getDate()
    const month = today.getMonth()+1
    const year = today.getFullYear()
    const currentDate = `${date}/${month}/${year}`
  return (
    <article className="post">
        <Link to={`post/${post.id}`}><h2>{post.title}</h2></Link>
        <p className="postDate">{currentDate}</p>
        <p className="postBody">{post.body}</p>
    </article>
  )
}

export default Post