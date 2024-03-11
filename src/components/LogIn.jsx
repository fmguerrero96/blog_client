import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function LogIn() {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginData({
            ...loginData, 
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/blog/users/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(loginData),
            })

            if(response.ok) {
                //Login successful. Save token in local storage. Redirect user to home page.
                const data = await response.json();
                localStorage.setItem("token", data.token);
                console.log(data.token)
                navigate('/');
            } else {
                //Login failed, handle error.
                const data = await response.json();
                setError(data.error);
            }
        } catch(error) {
            console.error("Login error:", error);
            setError("An error occurred while logging in.");
        }
    };

    return(
        <div className="login_form_container">
            <form onSubmit={handleSubmit} className="login_form">
                <div className="form_input_container">

                    <div className="form_group">
                        <label htmlFor='username'>Username: </label>
                        <input type="text" name='username' value={loginData.username} onChange={handleChange} id="username" required></input>
                    </div>

                    <div className="form_group">
                        <label htmlFor='password'>Password: </label>
                        <input type="password" name="password" value={loginData.password} onChange={handleChange} id="password" required></input>
                    </div>

                    {error && <div className="error">{error}</div>}

                    <button type="submit">LogIn</button>

                    <Link className="go_to_signup" to="/signUp">Don't have an account yet? Create an account here</Link>

                </div>
            </form>
        </div>
    )
};

export default LogIn;