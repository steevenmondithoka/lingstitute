import React from 'react';


const Contact = () => {
  return (
    <div className="cdn-contact-section">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out through any of the options below.</p>
      </div>

      <div className="contact-info">
        <div className="info-item">
          <i className="fas fa-envelope icon"></i>
          <p>steevemondithoka@gmail.com</p>
        </div>
        <div className="info-item">
          <i className="fas fa-phone-alt icon"></i>
          <p>+917893834064</p>
        </div>
        <div className="info-item">
          <i className="fas fa-map-marker-alt icon"></i>
          <p>123 Language St., City, Country</p>
        </div>
      </div>

      <div className="social-media-section">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://facebook.com" className="social-icon" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="social-icon" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="social-icon" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
