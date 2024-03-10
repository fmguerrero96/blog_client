const SignUp = () => {
    return(
        <div className="signup_container">
            <form action="" method="POST" className="signup_form">
                <div className="form_input_container">

                    <div className="form_group">
                        <label htmlFor='firstName'>First Name: </label>
                        <input type="text" name='firstName' id="firstName" required></input>
                    </div>

                    <div className="form_group">
                        <label htmlFor='username'>Username: </label>
                        <input type="text" name='username' id="username" required></input>
                    </div>

                    <div className="form_group">
                        <label htmlFor='password'>Password: </label>
                        <input type="password" name='password' id="password" required></input>
                    </div>  

                     <div className="form_group">
                        <label htmlFor='confirm_password'>Confirm Password: </label>
                        <input type="password" name='confirm_password' id="confirm_password" required></input>
                    </div>

                    <button type="submit">Sign Up</button>                  

                </div>
            </form>
        </div>
    )
};

export default SignUp;