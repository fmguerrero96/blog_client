import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CommentSection = ({ postId }) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        // Fetch comments from the backend
        fetch(`http://localhost:3000/blog/posts/${postId}/comments`)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(error => console.error('Error fetching comments:', error));
    }, [postId]); 
    
    return(
        <div className="comment_section_container">
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