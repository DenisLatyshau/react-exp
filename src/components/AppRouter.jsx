import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPages from "../pages/PostIdPages";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostIdPages />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default AppRouter