import { createContext, useState, useEffect } from 'react'
import postsApi from '../api/postsApi';
import useWindowSize from '../hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';

const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const {width} = useWindowSize()
    const [posts, setposts] = useState([])

    const Navigate = useNavigate()

    const [search, setsearch] = useState('')
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const response = await postsApi.get('/posts')
            const postData = response.data
            const filteredResult = postData.filter((post) => ((post.title).toLowerCase()).includes(search.toLowerCase()))
            setSearchResults(filteredResult.reverse())
            setposts(postData)
        } catch (error) {
            if(error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.header)
            } else {
            console.log(`Error: ${error.message}`)
            }
        }
        }

        fetchPosts();
    }, [posts, search])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const id = posts.length ? posts[(posts.length)-1].id+1 : 1
        const newPost = {id: id, title: postTitle, body: postBody}
        try {
        const response = await postsApi.post('/posts', newPost)
        const allPosts = [...posts, response.data]
        setposts(allPosts)
        setPostTitle('')
        setPostBody('')
        Navigate('/')
        } catch (error) {
        if(error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.header)
        } else {
            console.log(`Error: ${error.message}`)
        }
        }
    }

    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    return (
        <DataContext.Provider value={{
            width, search, setsearch, searchResults, handleSubmit, postTitle, setPostTitle, postBody, setPostBody
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext