import React from 'react';

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-content">
      <h1 className="hero-title">We Build Your Dreams</h1>
      <p className="hero-subtitle">
        Transforming ideas into powerful digital solutions with cutting-edge web, mobile, and robotics applications
      </p>
      <div className="hero-buttons">
        <a href="#services" className="btn btn-primary">Our Services</a>
        <a href="#contact" className="btn btn-secondary">Get Started</a>
      </div>
    </div>
    <div className="hero-animation">
      <div className="floating-card">
        <i className="fas fa-code"></i>
        <span>Web Development</span>
      </div>
      <div className="floating-card">
        <i className="fas fa-mobile-alt"></i>
        <span>Mobile Apps</span>
      </div>
      <div className="floating-card">
        <i className="fas fa-robot"></i>
        <span>AI Solutions</span>
      </div>
      <div className="floating-card">
        <i className="fas fa-cogs"></i>
        <span>Robotics</span>
      </div>
    </div>
  </section>
);

export default Hero;
