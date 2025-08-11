import React from 'react';

const Services = () => (
  <section id="services" className="services">
    <div className="container">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>We offer comprehensive digital solutions including web development, mobile applications, AI solutions, and robotics to help your business thrive in the digital age</p>
      </div>
      
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-laptop-code"></i>
          </div>
          <h3>Web Application Development</h3>
          <p>Custom web applications built with modern frameworks and technologies. From simple websites to complex enterprise solutions.</p>
          <ul className="service-features">
            <li>React, Angular, Vue.js</li>
            <li>Node.js, Python, Java</li>
            <li>Database design & optimization</li>
            <li>Cloud deployment & scaling</li>
          </ul>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <h3>Mobile Application Development</h3>
          <p>Native and cross-platform mobile apps that provide exceptional user experiences across all devices.</p>
          <ul className="service-features">
            <li>iOS & Android development</li>
            <li>React Native & Flutter</li>
            <li>UI/UX design</li>
            <li>App store deployment</li>
          </ul>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-brain"></i>
          </div>
          <h3>AI-Driven Solutions</h3>
          <p>Leverage the power of artificial intelligence to automate processes and gain valuable insights from your data.</p>
          <ul className="service-features">
            <li>Machine Learning models</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            <li>AI integration & consulting</li>
          </ul>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-robot"></i>
          </div>
          <h3>Robotics Solutions</h3>
          <p>Innovative robotics solutions that automate complex tasks and enhance operational efficiency across various industries.</p>
          <ul className="service-features">
            <li>Industrial automation systems</li>
            <li>Robotic process automation (RPA)</li>
            <li>Custom robotic hardware design</li>
            <li>IoT integration & control systems</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
