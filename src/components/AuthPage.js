import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import './AuthPage.css';

function AuthPage({ onSignIn, onSignUp }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Sign in handler
  const handleSignIn = async (username, password) => {
    setLoading(true);
    setErrorMessage('');
    
    try {
      // Simulate sign-in logic (replace with actual API call)
      if (username && password) {
        // Replace with actual authentication logic
        console.log("Signed in successfully:", { username, password });
        onSignIn(); // Call the sign-in handler from props
        navigate("/dashboard"); // Change to your desired route
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      setErrorMessage('Sign-in failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  // Sign up handler
  const handleSignUp = async (userData) => {
    setLoading(true);
    setErrorMessage('');
    
    try {
      // Simulate sign-up logic (replace with actual API call)
      if (userData) {
        console.log("Signed up successfully:", userData);
        onSignUp(); // Call the sign-up handler from props
        navigate("/signin");
      } else {
        throw new Error("Invalid data");
      }
    } catch (error) {
      setErrorMessage('Sign-up failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      {loading && <div className="loading-message">Loading...</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <Routes>
        <Route 
          path="/signin" 
          element={<SignIn onSignIn={handleSignIn} />} 
        />
        <Route 
          path="/signup" 
          element={<SignUp onSignUp={handleSignUp} />} 
        />
      </Routes>
    </div>
  );
}

export default AuthPage;
