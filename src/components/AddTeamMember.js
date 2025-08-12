import React, { useState, useEffect } from 'react';
import { teamService } from '../services/teamService';

const AddTeamMember = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    description: '',
    email: '',
    linkedin: '',
    avatar: '',
    reportsTo: ''
  });
  
  const [existingMembers, setExistingMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    loadExistingMembers();
  }, []);

  const loadExistingMembers = async () => {
    try {
      setLoading(true);
      const members = await teamService.getTeamMembers();
      setExistingMembers(members);
      setError(null);
    } catch (err) {
      setError('Failed to load existing team members');
      console.error('Error loading team members:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.position.trim()) {
      setError('Position is required');
      return false;
    }
    if (!formData.description.trim()) {
      setError('Description is required');
      return false;
    }
    if (!formData.reportsTo && existingMembers.length > 0) {
      setError('Please select a reporting manager');
      return false;
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (formData.linkedin && !formData.linkedin.includes('linkedin.com')) {
      setError('Please enter a valid LinkedIn URL');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    try {
      setSubmitLoading(true);
      
      // Prepare the data for submission
      const newMember = {
        ...formData,
        avatar: formData.avatar.trim() || null,
        email: formData.email.trim() || null,
        linkedin: formData.linkedin.trim() || null,
        reportsTo: formData.reportsTo ? parseInt(formData.reportsTo) : null
      };

      // Call the API to add the new team member
      await teamService.addTeamMember(newMember);
      
      setSuccess(true);
      setFormData({
        name: '',
        position: '',
        description: '',
        email: '',
        linkedin: '',
        avatar: '',
        reportsTo: ''
      });
      
      // Reload existing members to include the new one
      await loadExistingMembers();
      
    } catch (err) {
      setError('Failed to add team member. Please try again.');
      console.error('Error adding team member:', err);
    } finally {
      setSubmitLoading(false);
    }
  };

  const getHierarchyDisplay = (member) => {
    const reportsToMember = existingMembers.find(m => m.id === member.reportsTo);
    if (reportsToMember) {
      return `${member.name} (${member.position}) → Reports to: ${reportsToMember.name}`;
    }
    return `${member.name} (${member.position}) → CEO/Top Level`;
  };

  return (
    <div className="add-team-member-page">
      <div className="container">
        <div className="page-header">
          <h1>Add New Team Member</h1>
          <p>Add a new team member to the organization with proper hierarchy</p>
        </div>

        <div className="add-member-content">
          <div className="form-section">
            <form onSubmit={handleSubmit} className="team-member-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="position">Position/Title *</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder="e.g., Senior Developer, Project Manager"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Brief description of expertise and role"
                  rows="4"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="reportsTo">Reports To *</label>
                <select
                  id="reportsTo"
                  name="reportsTo"
                  value={formData.reportsTo}
                  onChange={handleInputChange}
                  required={existingMembers.length > 0}
                >
                  <option value="">Select reporting manager</option>
                  {existingMembers.map(member => (
                    <option key={member.id} value={member.id}>
                      {member.name} ({member.position})
                    </option>
                  ))}
                </select>
                {existingMembers.length === 0 && (
                  <small className="form-note">This will be the first team member (CEO level)</small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@company.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="linkedin">LinkedIn Profile</label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="avatar">Avatar URL</label>
                <input
                  type="url"
                  id="avatar"
                  name="avatar"
                  value={formData.avatar}
                  onChange={handleInputChange}
                  placeholder="https://example.com/photo.jpg (optional)"
                />
                <small className="form-note">If not provided, an avatar will be generated automatically</small>
              </div>

              {error && (
                <div className="form-error">
                  <i className="fas fa-exclamation-triangle"></i>
                  {error}
                </div>
              )}

              {success && (
                <div className="form-success">
                  <i className="fas fa-check-circle"></i>
                  Team member added successfully!
                </div>
              )}

              <div className="form-actions">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={submitLoading}
                >
                  {submitLoading ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Adding Member...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-user-plus"></i>
                      Add Team Member
                    </>
                  )}
                </button>
                
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => window.history.back()}
                >
                  <i className="fas fa-arrow-left"></i>
                  Back
                </button>
              </div>
            </form>
          </div>

          <div className="hierarchy-section">
            <h3>Current Team Hierarchy</h3>
            {loading ? (
              <div className="hierarchy-loading">
                <i className="fas fa-spinner fa-spin"></i>
                <p>Loading team structure...</p>
              </div>
            ) : existingMembers.length > 0 ? (
              <div className="hierarchy-list">
                {existingMembers.map(member => (
                  <div key={member.id} className="hierarchy-item">
                    <div className="member-details">
                      <strong>{member.name}</strong>
                      <span className="position">{member.position}</span>
                    </div>
                    <div className="hierarchy-line">
                      {member.reportsTo ? (
                        <>
                          Reports to: <strong>
                            {existingMembers.find(m => m.id === member.reportsTo)?.name || 'Unknown'}
                          </strong>
                        </>
                      ) : (
                        <span className="ceo-badge">CEO / Top Level</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="hierarchy-empty">
                <i className="fas fa-users"></i>
                <p>No team members yet. The first member will be at CEO level.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeamMember;
