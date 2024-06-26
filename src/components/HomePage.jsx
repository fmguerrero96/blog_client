import PostPreview from "./PostPreview";

const HomePage = ({ blogPosts }) => {
    return (
        <div className="home_page_container">
            <h1 className="homepage_title">Welcome to Generic Blog</h1>

            <h4 className="blogs_title">Blog Posts</h4>
            <p className="blogs_description">Here are all the blog posts available for you to view.</p>

            <div className="blog_posts_container">
                {blogPosts ? (
                    blogPosts.map((post) => (
                        <PostPreview key={post._id} post={post}></PostPreview>
                    ))
                ): (
                    <p>Loading Blog Posts...</p>
                )}
            </div>
        </div>
    )
};

export default HomePage;