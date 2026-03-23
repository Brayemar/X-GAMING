import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2026 X Gaming. All rights reserved. Your go-to platform for the latest games, news, and updates.</p>
      </div>
      <div className="footer-center">
        <p>X GAMING is your ultimate digital playground where passion meets power. Dive into a universe of the latest games, exclusive content, and thrilling experiences designed for true gamers. Explore, compete, and connect with a vibrant community while enjoying a seamless, high-performance platform. From epic adventures to fast-paced action, X GAMING delivers everything you need to elevate your gaming lifestyle. Navigate effortlessly, discover hidden gems, and stay ahead with real-time updates, tips, and trends. Perfect for enthusiasts seeking excitement, innovation, and the ultimate gaming hub — X GAMING brings your virtual world to life like never before.</p>
      </div>
      <div className="footer-right">
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;