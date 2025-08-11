import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Dharma Teja Solutions</h3>
          <p>Building digital dreams with innovative web, mobile, and robotics solutions.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Web Development</a></li>
            <li><a href="#services">Mobile Apps</a></li>
            <li><a href="#services">AI Solutions</a></li>
            <li><a href="#services">Robotics</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>dharmateja@dts.com</p>
          <p>+91 99512 64256</p>
          <p>Srikakulam, India</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Dharma Teja Solutions. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
