import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Dharma Teja Solutions</h2>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
          <li className="nav-item"><a href="#services" className="nav-link" onClick={closeMenu}>Services</a></li>
          <li className="nav-item"><a href="#blog" className="nav-link" onClick={closeMenu}>Blog</a></li>
          <li className="nav-item"><a href="#careers" className="nav-link" onClick={closeMenu}>Careers</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
