import React from 'react';

const Careers = () => (
  <section id="careers" className="careers">
    <div className="container">
      <div className="section-header">
        <h2>Careers</h2>
        <p>We're always looking for passionate developers. Stay tuned for job openings!</p>
      </div>
      
      <div className="careers-content">
        <div className="careers-text">
          <h3>Join Our Team</h3>
          <p>At Dharma Teja Solutions, we believe in fostering a culture of innovation, collaboration, and continuous learning. We're always on the lookout for talented individuals who share our passion for technology and excellence.</p>
          
          <h4>What We Offer:</h4>
          <ul className="benefits-list">
            <li><i className="fas fa-star"></i> Competitive salary and benefits</li>
            <li><i className="fas fa-star"></i> Flexible working arrangements</li>
            <li><i className="fas fa-star"></i> Professional development opportunities</li>
            <li><i className="fas fa-star"></i> Cutting-edge technology stack</li>
            <li><i className="fas fa-star"></i> Collaborative and inclusive environment</li>
          </ul>
        </div>
        
        <div className="careers-cta">
          <div className="cta-card">
            <h4>Ready to Build the Future?</h4>
            <p>Send us your resume and portfolio. We'll be in touch when the right opportunity arises.</p>
            <a href="mailto:dharmateja@dts.com" className="btn btn-primary">Send Your Resume</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Careers;
