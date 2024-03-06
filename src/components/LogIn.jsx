import { Link } from "react-router-dom";

function LogIn() {
    return(
        <div className="login_form_container">
            <form action="" method="POST" className="login_form">
                <div className="form_input_container">

                    <div className="form_group">
                        <label for='username'>Username: </label>
                        <input type="text" name='username' id="username" required></input>
                    </div>

                    <div className="form_group">
                        <label for='password'>Password: </label>
                        <input type="password" name="password" id="password" required></input>
                    </div>

                    <button type="submit">LogIn</button>

                    <Link className="go_to_signup" to="/signUp">Don't have an account yet? Create an account here</Link>

                </div>
            </form>
        </div>
    )
};

export default LogIn;