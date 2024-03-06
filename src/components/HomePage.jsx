const HomePage = () => {
    return (
        <div className="home_page_container">
            <h1 className="homepage_title">Welcome to Generic Blog</h1>

            <h4 className="blogs_title">Blog Posts</h4>
            <p className="blogs_description">Here are all the blog posts available for you to view.</p>

            <div className="blog_posts_container">
                <p>This will eventually contain a list of all the blog posts.</p>
                <p>There will be a GET request made and all the posts will be shown here.</p>
            </div>
        </div>
    )
};

export default HomePage;