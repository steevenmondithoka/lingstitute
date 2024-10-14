import React, { useState } from 'react';
import logo from '../images/WhatsApp Image 2024-10-02 at 20.09.46_31d9dcb3.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number and message
    const phoneNumber = "917893834064"; // Your WhatsApp number (with country code, no spaces or + symbol)
    const message = "Hello User!! Register Here for Lingstitute the language community"; // Predefined message

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp chat in a new tab
    window.open(whatsappURL, '_blank');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <div class="animated-heading">Lingstitute</div>
      <div class="sub-heading">The Language Community</div>
      
       
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          
          <li><a href="/contact">Contact</a></li>
          <li><a  onClick={handleWhatsAppClick} style={{cursor:'pointer'}}><i class="fa-solid fa-award"></i>&nbsp;Enroll</a></li>
        </ul>
      </div>
      
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
