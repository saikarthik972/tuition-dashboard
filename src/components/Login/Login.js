// src/LoginScreen.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginScreen = () => {
  const [isRightPanelActive, setRightPanelActive] = useState(false);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform authentication (you can add your authentication logic here)
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/dashboard'); // Redirect to the dashboard on successful login
  };

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#" onSubmit={handleSubmit}>
          <h1>Sign in</h1>
         
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>Welcome To Tution point ----</p>
            <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend! Welcome Back!</h1>
            <p>Welcome To Tution point ---- and start journey with us</p>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
