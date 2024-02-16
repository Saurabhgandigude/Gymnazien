// src/components/Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

const Footer = () => {
  return (
    <footer style={{ background: '#000000', textAlign: 'center', padding: '20px', width: '100%', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* First Column */}
        <div style={{ textAlign: 'left', marginRight: '30px' }}>
          <h4 style={{ color: '#FF0000' }}>Contact Us</h4>
          <p>
            <a href="mailto:your.email@example.com" style={{ color: '#FF0000' }}>
              <img src="email_logo.png" style={{ marginRight: '5px' }} />
              your.email@example.com
            </a>
          </p>
        </div>

        {/* Second Column */}
        <div style={{ textAlign: 'right', marginLeft: '30px' }}> {/* Added marginLeft here */}
          <h4 style={{ color: '#FF0000' }}>Follow Us</h4>
          <p>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#FF0000' }}>
              <img src="instagram_logo.png" style={{ marginRight: '5px' }} />
              Instagram
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#FF0000' }}>
              <img src="linkedin_logo.png" style={{ marginRight: '5px' }} />
              LinkedIn
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#FF0000' }}>
              <img src="facebook_logo.png" style={{ marginRight: '5px' }} />
              Facebook
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
