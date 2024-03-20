import NavBar from "./NavBar"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogPostPage = ({ loggedIn, user, handleLogOut }) => {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/blog/posts/${id}`)
        .then(res => res.json())
        .then(res => setPost(res))
    }, []);


    return (
        <div className="postPage">
            <NavBar loggedIn={loggedIn} user={user} handleLogOut={handleLogOut}></NavBar>

            <div className="postContainer">
                <h1 className="postTitle">{post.title}</h1>
                <p className="postText">{post.text}</p>
            </div>
        </div>
    )
};

export default BlogPostPage;