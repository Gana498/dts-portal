import React, { useState, useEffect } from 'react';
import { teamService } from '../services/teamService';

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTeamMembers = async () => {
      try {
        setLoading(true);
        const members = await teamService.getTeamMembers();
        setTeamMembers(members);
        setError(null);
      } catch (err) {
        setError('Failed to load team members');
        console.error('Error loading team members:', err);
      } finally {
        setLoading(false);
      }
    };

    loadTeamMembers();
  }, []);

  const getAvatarUrl = (member) => {
    if (member.avatar) {
      return member.avatar;
    }
    // Generate a placeholder avatar using the member's initials
    const initials = member.name.split(' ').map(n => n[0]).join('').toUpperCase();
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=667eea&color=fff&size=200&font-size=0.6&rounded=true&bold=true`;
  };

  return (
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
        </div>
        
        <div className="about-features">
          <h3>Why Choose Us?</h3>
          <ul className="features-list">
            <li><i className="fas fa-check-circle"></i> Expert team with years of experience</li>
            <li><i className="fas fa-check-circle"></i> AI-driven development approach</li>
            <li><i className="fas fa-check-circle"></i> Modern technologies and best practices</li>
            <li><i className="fas fa-check-circle"></i> End-to-end project delivery</li>
            <li><i className="fas fa-check-circle"></i> 24/7 support and maintenance</li>
          </ul>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="team-section">
        <h3>Our Team</h3>
        {loading && (
          <div className="team-loading">
            <i className="fas fa-spinner fa-spin"></i>
            <p>Loading team members...</p>
          </div>
        )}
        
        {error && (
          <div className="team-error">
            <i className="fas fa-exclamation-triangle"></i>
            <p>{error}</p>
          </div>
        )}
        
        {!loading && !error && teamMembers.length > 0 && (
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <div className="member-avatar">
                  <img 
                    src={getAvatarUrl(member)} 
                    alt={member.name}
                    onError={(e) => {
                      e.target.src = getAvatarUrl(member);
                    }}
                  />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <p className="member-position">{member.position}</p>
                  <p className="member-description">{member.description}</p>
                  <div className="member-contact">
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="contact-link">
                        <i className="fas fa-envelope"></i>
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {!loading && !error && teamMembers.length === 0 && (
          <div className="team-empty">
            <i className="fas fa-users"></i>
            <p>No team members found at the moment.</p>
          </div>
        )}
      </div>
    </div>
  </section>
);
};

export default About;
