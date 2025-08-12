import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2>Dharma Teja Solutions</h2>
          </Link>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {isHomePage ? (
            // Show section links when on home page
            <>
              <li className="nav-item"><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
              <li className="nav-item"><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
              <li className="nav-item"><a href="#services" className="nav-link" onClick={closeMenu}>Services</a></li>
              <li className="nav-item"><a href="#blog" className="nav-link" onClick={closeMenu}>Blog</a></li>
              <li className="nav-item"><a href="#careers" className="nav-link" onClick={closeMenu}>Careers</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
            </>
          ) : (
            // Show main navigation when on other pages
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link to="/add-team-member" className="nav-link admin-link" onClick={closeMenu}>
              <i className="fas fa-user-plus"></i> Add Team Member
            </Link>
          </li>
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
