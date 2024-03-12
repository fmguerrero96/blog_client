import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage";
import { useState, useEffect } from "react";

function App() {
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
  }, []);

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

  return (
   <div>
      <div className="navContainer">
        <NavBar loggedIn={loggedIn} user={user} handleLogOut={handleLogOut}></NavBar>
        <HomePage blogPosts={blogPosts}></HomePage>
      </div>
   </div>
  )
}

export default App
