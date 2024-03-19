import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage";

function App({ loggedIn, user, handleLogOut, blogPosts }) {

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
