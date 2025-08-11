import React from 'react';

const Blog = () => (
  <section id="blog" className="blog">
    <div className="container">
      <div className="section-header">
        <h2>Blog</h2>
        <p>Coming soon: Insights, updates, and tech tips from our team.</p>
      </div>
      
      <div className="blog-placeholder">
        <div className="placeholder-content">
          <i className="fas fa-blog"></i>
          <h3>Stay Tuned!</h3>
          <p>We're working on bringing you the latest insights, industry trends, and technical tutorials. Our blog will feature:</p>
          <ul>
            <li>Development best practices</li>
            <li>Technology trends and insights</li>
            <li>Project case studies</li>
            <li>Tips and tutorials</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Blog;
