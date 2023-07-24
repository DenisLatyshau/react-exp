import React, { useEffect, useState } from "react";
import axios from "axios";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";

import './styles/App.css'
import PostService from "./API/PostService";



function App() {
  const [posts, setPosts] = useState([
          {id: 1, title: 'Title 1', body: 'Description'},
          {id: 2, title: 'Title 2', body: 'Description'},
          {id: 3, title: 'Title 3', body: 'Description'}
    ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    const posts = await PostService.getAll()
    setPosts(posts)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id) )
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '20px'}} onClick={() => setModal(true)}>
        Создать сообщение
      </MyButton>
      <MyModal visible={modal} setVisible={setModal} >
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
        filter={filter} 
        setFilter={setFilter} 
      />
      <PostList 
        remove={removePost} 
        posts={sortedAndSearchedPosts} 
        title='Посты про JS'
      />
    </div>
  )
}

export default App;
