import React from 'react';

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <div className="section-header">
        <h2>About Us</h2>
        <p>We are developers passionate about web application development, mobile application development, and robotics solutions. Using AI-driven solutions, we help bring your digital dreams to life.</p>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <h3>Our Mission</h3>
          <p>At Dharma Teja Solutions, we believe in the power of technology to transform businesses and lives. Our mission is to deliver innovative, scalable, and user-centric digital solutions that drive growth and success for our clients.</p>
          
          <h3>Why Choose Us?</h3>
          <ul className="features-list">
            <li><i className="fas fa-check-circle"></i> Expert team with years of experience</li>
            <li><i className="fas fa-check-circle"></i> AI-driven development approach</li>
            <li><i className="fas fa-check-circle"></i> Modern technologies and best practices</li>
            <li><i className="fas fa-check-circle"></i> End-to-end project delivery</li>
            <li><i className="fas fa-check-circle"></i> 24/7 support and maintenance</li>
          </ul>
        </div>
        
        <div className="team-section">
          <h3>Our Team</h3>
          <div className="team-member">
            <div className="member-avatar">
              <i className="fas fa-user-circle"></i>
            </div>
            <div className="member-info">
              <h4>Dharma Teja</h4>
              <p>Founder and CEO</p>
              <p>Visionary leader with expertise in full-stack development and AI technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
