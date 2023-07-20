import React, { useRef, useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/inout/MyInput";

import './styles/App.css'


function App() {
  const [posts, setPosts] = useState([
          {id: 1, title: 'Title 1', body: 'Description'},
          {id: 2, title: 'Title 2', body: 'Description'},
          {id: 3, title: 'Title 3', body: 'Description'}
    ])
  
  const [post, setPost] = useState( {title: '', body: ''} )

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>
        <MyInput 
            type="text" 
            placeholder="Нзвание поста" 
            value={post.title}
            onChange={e => setPost({...post, title: e.target.value})}
        />
        <MyInput 
            type="text" 
            placeholder="Описание поста" 
            value={post.body}
            onChange={e => setPost({...post, body: e.target.value})}
        />
        <MyButton onClick={addNewPost} >Создать пост!</MyButton>
      </form>
      <PostList posts={posts} title='Посты про JS'/>
    </div>
  )
}

export default App;
