import React, { useState } from "react";
import "./sign-up.scss";
function SignUp() {
  const [showSignUp, setShowSignUp] = useState(true);
  const switchForm = () => {
    setShowSignUp(!showSignUp);
  };
  return (
    <div className="sign_up_cover">
      <div className="form_cover">
        <h1>
          {showSignUp ? "Create Your New Acccount" : "Log in to your account"}
        </h1>
        <form>
          {showSignUp && (
            <input type="text" placeholder="Your Name" name="Name" />
          )}
          <input type="email" name="email" placeholder="Your Email" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <button className="form_btn">
            {showSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>
        {showSignUp ? <h3>or</h3> : <p>No Account? Try Sign up.</p>}
        <button className="form_btn" onClick={switchForm}>
          {showSignUp ? "Log In" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}

export default SignUp;
