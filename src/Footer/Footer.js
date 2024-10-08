// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p>Thanks for Shopping</p>
      <p>Contact us: support@yourshop.com</p>
      <p>&copy; {new Date().getFullYear()} Your Shop Name. All rights reserved.</p>
      <hr />
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
