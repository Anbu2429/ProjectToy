import React, { useState } from 'react';

function SignIn({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      await fakeApiSignIn(username, password); // Call the fake API
      onSignIn(username, password); // Pass username and password to the handler
    } catch (error) {
      setErrorMessage(error.message); // Set error message for invalid credentials
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading && <div className="loading-message">Loading...</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
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
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}

// Fake API function for demonstration
const fakeApiSignIn = (username, password) => {
  return new Promise((resolve, reject) => {
    const validCredentials = {
      username: 'user123',
      password: 'password123',
    };

    setTimeout(() => {
      if (
        username === validCredentials.username &&
        password === validCredentials.password
      ) {
        resolve(); // Successful sign-in
      } else {
        reject(new Error('Invalid username or password')); // Failed sign-in
      }
    }, 1000);
  });
};

export default SignIn;
