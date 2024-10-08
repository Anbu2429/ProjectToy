import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import AuthPage from './components/AuthPage';
import ProductList from './Product/ProductList';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  const handleSignUp = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div>
        {/* Show Navbar only if authenticated */}
        {isAuthenticated && <Navbar onSignOut={handleSignOut} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/contact" element={<Contact />} />
          {/* AuthPage handles both SignIn and SignUp based on the route */}
          <Route 
            path="/signin" 
            element={<AuthPage onSignIn={handleSignIn} />} 
          />
          <Route 
            path="/signup" 
            element={<AuthPage onSignUp={handleSignUp} />} 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
