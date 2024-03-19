const PostPreview = ({ post }) => {
    const synopsis = post.text.substring(0, 100)

    return(
        <div className="post_preview" key={post._id}>
            <h3 className="post_title_preview">{post.title}</h3>
            <p className="synopsis">{synopsis}</p>
        </div>
    )
};

export default PostPreview