import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setMessage('Please fill in all fields.');
      setMessageType('error');
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      setMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }
    
    // Simulate form submission
    setMessage("Thank you for your message! We'll get back to you soon.");
    setMessageType('success');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Auto remove message after 5 seconds
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Let's discuss how we can help bring your digital dreams to life</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p><a href="mailto:dharmateja@dts.com">dharmateja@dts.com</a></p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h4>Phone</h4>
              <p><a href="tel:+919951264256">+91 99512 64256</a></p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h4>Location</h4>
              <p>Srikakulam, India</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <h4>LinkedIn</h4>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Connect with us on LinkedIn</a></p>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
              {message && (
                <div className={`form-message ${messageType}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
