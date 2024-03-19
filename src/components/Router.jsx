import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Login from "./LogIn";
import SignUp from "./SignUp";
import { useState, useEffect } from "react";

const Router = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState(undefined)
    const [blogPosts, setBlogPosts] =useState([])

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token){
            setLoggedIn(true)
            const decodedToken = atob(token.split('.')[1])
            const userInfo = JSON.parse(decodedToken).user
            setUser(userInfo)
        } else {
            setLoggedIn(false)
            setUser(null)
        }
    },[]);

    useEffect(() => {
        fetch('http://localhost:3000/blog/posts')
        .then(res => res.json())
        .then(res => setBlogPosts(res))
    }, []);


    const handleLogOut = () => {
        localStorage.removeItem('token')
        setLoggedIn(false)
        setUser(undefined)
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App loggedIn={loggedIn} user={user} handleLogOut={handleLogOut} blogPosts={blogPosts} />,
        },
        {
            path: "/login",
            element: <Login loggedIn={loggedIn} user={user} handleLogOut={handleLogOut}/>
        },
        {
            path: "/signup",
            element: <SignUp loggedIn={loggedIn} user={user} handleLogOut={handleLogOut}/>
        },
    ])

    return <RouterProvider router={router} />;
};

export default Router