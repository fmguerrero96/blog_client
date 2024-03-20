import NavBar from "./components/NavBar"

const BlogPostPage = ({ loggedIn, user, handleLogOut }) => {

    return (
        <div className="postPage">
            <NavBar loggedIn={loggedIn} user={user} handleLogOut={handleLogOut}></NavBar>

            <div className="postContainer">
                <h1 className="postTitle"></h1>
                <p className="postText"></p>
            </div>
        </div>
    )
};