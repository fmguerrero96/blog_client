import { Link } from "react-router-dom";

const NavBar = ({ loggedIn, user, handleLogOut}) => {


    return(
        <div className="navBar">
            <h1 className='navTitle'>
                FakeBlog
            </h1>
            <div className="navLinks">
                {loggedIn ? (
                    <>
                        <p>Welcome {user.username}</p>
                        <Link className="logout_link" to={'/'} onClick={handleLogOut}>LogOut</Link>
                    </>
                ) : (
                    <Link className="login_link" to='/login'>Log In</Link>
                )}
            </div>
        </div>
    )
};

export default NavBar;