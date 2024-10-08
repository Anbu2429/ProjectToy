import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp({ onSignUp }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const validateUsername = (username) => {
    return /^[A-Z].*$/.test(username); // Username must start with a capital letter
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    // Password must be at least 8 characters long and contain:
    // - at least one uppercase letter
    // - at least one lowercase letter
    // - at least one number
    // - at least one special character
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input fields
    if (!firstName || !lastName || !username || !password || !email || !phoneNumber) {
      alert('Please fill in all fields');
      return;
    }
    if (!validateUsername(username)) {
      alert('Username must start with a capital letter.');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email ID.');
      return;
    }
    if (!validatePassword(password)) {
      alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }
    
    // Simulate a sign-up process (replace with actual API call)
    console.log('Sign-Up Details:', { firstName, lastName, middleName, username, password, email, phoneNumber });
    onSignUp(); // Trigger the sign-up handler
    navigate('/signin'); // Redirect to sign-in after successful sign-up
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Middle Name"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <button type="submit">Create Account</button>
        <div className="signup-links">
          <button type="button" onClick={() => navigate('/signin')}>
            Already have an account?
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
