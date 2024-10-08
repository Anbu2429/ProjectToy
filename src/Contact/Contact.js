import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <>
      <div className="contact-container">
        <h1 className="contact-text">Contact Us</h1>
        <p className="contact-description">Get in touch with us for any queries or support.</p>
      </div>
      <div className="contact-socialmedia">
        <div className="connect-links">
          <a 
            href="https://www.linkedin.com/in/anbuselvan2429/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
              alt="LinkedIn" 
              height="50px" 
            />
            <p className='contact-names'>LinkedIn</p>
          </a>
          <a 
            href="https://www.instagram.com/toy_st0r3/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
              alt="Instagram" 
              height="50px" 
            />
            <p className='contact-names'>Instagram</p>
          </a>
          <a 
            href="mailto:toystore0123@gmail.com"
            aria-label="Email"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" 
              alt="Gmail" 
              height="50px" 
            />
            <p className='contact-names'>Mail</p>
          </a>
          <a 
            href="https://x.com/AnbuAndiyur" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/1134px-X_logo_2023.svg.png" 
              alt="Twitter" 
              height="50px" 
            />
            <p className='contact-names'>Twitter</p>
          </a>
          <a 
            href="https://www.facebook.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/768px-Facebook_f_logo_%282021%29.svg.png?20210818083032" 
              alt="Facebook" 
              height="50px" 
            />
            <p className='contact-names'>Facebook</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
