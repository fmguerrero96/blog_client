import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CommentSection = ({ postID, user, loggedIn }) => {
    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({
        message: '',
        _id: user ? user._id : undefined,
        postid: postID
    });
    const [error, setError] = useState('');

    useEffect(() => {
        fetchComments()

        const token = localStorage.getItem('token')

        if(token){
            const decodedToken = atob(token.split('.')[1])
            const userInfo = JSON.parse(decodedToken).user

            setFormData({...formData, _id: userInfo._id})
        } 
    }, []); 

    const fetchComments = () => {
        // Fetch comments from the backend
        fetch(`http://localhost:3000/blog/posts/${postID}/comments`)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(error => console.error('Error fetching comments:', error));
    };

    const handleChange = (e) => {
        setFormData({ 
            ...formData, [e.target.name]: e.target.value 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/blog/comments/${postID}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to submit comment');
            }
            // Clear form data and fetch comments again
            setFormData({ ...formData, message: '' });
            fetchComments();
        } catch (error) {
            console.error('Error submitting comment:', error.message);
            setError('Failed to submit comment');
            console.log(error)
        }
    };

    
    return(
        <div className="comment_section_container">

            {comments.length > 0 ? (
                <h2>{comments.length} Comments</h2>
            ) : (
                <h2>Comments</h2>
            )} 

            {loggedIn ? (
                <form onSubmit={handleSubmit}>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your comment"
                    />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>Please <Link to={'/login'}>LogIn</Link> to leave a comment on this post</div>
            )}
            
            {error && <div className="error">{error}</div>}

            {comments.length > 0 ? (
                <ul>
                    {comments.map(comment => (
                        <li key={comment._id}>{comment.message}</li>
                    ))}
                </ul>
            ) : (
                <p>No comments yet</p>
            )}
        </div>
    )
};

export default CommentSection;