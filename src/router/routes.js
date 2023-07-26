import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPages from "../pages/PostIdPages";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/about', element: About, exact: true},
    {path: '/posts', element: Posts, exact: true},
    {path: '/posts/:id', element: PostIdPages, exact: true},
    {path: '*', element: Error, exact: true}
]

export const publicRoutes = [
    {path: '/login', element: Login, exact: true},
    {path: '/about', element: About, exact: true},
    {path: '*', element: Login, exact: true}
]