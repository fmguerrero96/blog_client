import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="navBar">
            <h1 className='navTitle'>
                FakeBlog
            </h1>
            <div className="navLinks">
                <Link className="login_link" to='/login'>LogIn</Link>
            </div>
        </div>
    )
};

export default NavBar;