import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css'; // Make sure this CSS file exists

function Navbar({ onSignOut }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };

  const isActive = (page) => location.pathname === `/${page}`;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Toy Store</div>
        <div>
          <button
            className={`navbar-link ${isActive('home') ? 'active' : ''}`}
            onClick={() => handleNavigate('home')}
            aria-label="Home"
          >
            Home
          </button>
          <button
            className={`navbar-link ${isActive('products') ? 'active' : ''}`}
            onClick={() => handleNavigate('products')}
            aria-label="Products"
          >
            Products
          </button>
          <button
            className={`navbar-link ${isActive('contact') ? 'active' : ''}`}
            onClick={() => handleNavigate('contact')}
            aria-label="Contact"
          >
            Contact
          </button>
          <button
            className="navbar-logout"
            onClick={onSignOut}
            aria-label="Logout"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
