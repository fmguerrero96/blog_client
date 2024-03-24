import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CommentSection = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({ message: '' });

    useEffect(() => {
        // Fetch comments from the backend
        fetch(`http://localhost:3000/blog/posts/${postId}/comments`)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(error => console.error('Error fetching comments:', error));
    }, [postId]); 

    const handleChange = (e) => {
        setFormData({ 
            ...formData, [e.target.name]: e.target.value 
        });
    };
    
    return(
        <div className="comment_section_container">

            <form onSubmit={handleSubmit}>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your comment"
                />
                <button type="submit">Submit</button>
            </form>

            {error && <div className="error">{error}</div>}

            <h2>Comments</h2>
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