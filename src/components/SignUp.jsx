import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        username: '',
        password: '',
        confirm_password: '',
    });
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3000/blog/users', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            })

            if(response.ok) {
                // Signup successful. Redirect to login page
                navigate('/login');
            } else {
                // Signup failed, handle error
                const data = await response.json();
                console.error('Signup error:', data.error);
                setError(data.error);
                // Display error message to the user
            }
        } catch(error) {
            console.error('Signup error:', error);
            setError("An error occurred while reigistering.");
            // Display error message to the user
        }
    };


    return(
        <div className="signup_container">
            <form onSubmit={handleSubmit} className="signup_form">
                <div className="form_input_container">

                    <div className="form_group">
                        <label htmlFor='first_name'>First Name: </label>
                        <input type="text" name='first_name' id="first_name" value={formData.first_name} onChange={handleChange} required></input>
                    </div>

                    <div className="form_group">
                        <label htmlFor='username'>Username: </label>
                        <input type="text" name='username' id="username" value={formData.username} onChange={handleChange} required></input>
                    </div>

                    <div className="form_group">
                        <label htmlFor='password'>Password: </label>
                        <input type="password" name='password' id="password" value={formData.password} onChange={handleChange} required></input>
                    </div>  

                     <div className="form_group">
                        <label htmlFor='confirm_password'>Confirm Password: </label>
                        <input type="password" name='confirm_password' id="confirm_password" value={formData.confirm_password} onChange={handleChange} required></input>
                    </div>

                    {error && <div className="error">{error}</div>}

                    <button type="submit">Sign Up</button>                  

                    <Link className="go_to_login" to="/login">Already have an account? Log In here</Link>
                </div>
            </form>
        </div>
    )
};

export default SignUp;