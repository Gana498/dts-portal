/**
 * Team Service - Handles all team-related API calls
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

/**
 * Fetch all team members from the backend
 * @returns {Promise<Array>} Array of team member objects
 */
export const fetchTeamMembers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/team`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any authentication headers if needed
        // 'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Validate the response structure
    if (!Array.isArray(data)) {
      throw new Error('Invalid response format: expected array');
    }

    return data;
  } catch (error) {
    console.error('Error fetching team members:', error);
    throw error;
  }
};

/**
 * Fetch a specific team member by ID
 * @param {string|number} id - Team member ID
 * @returns {Promise<Object>} Team member object
 */
export const fetchTeamMember = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/team/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching team member ${id}:`, error);
    throw error;
  }
};

/**
 * Add a new team member
 * @param {Object} teamMember - Team member data
 * @returns {Promise<Object>} Created team member object
 */
export const addTeamMember = async (teamMember) => {
  try {
    const response = await fetch(`${API_BASE_URL}/team`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teamMember),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error adding team member:', error);
    throw error;
  }
};

/**
 * Team API service with error handling
 */
export const teamService = {
  /**
   * Get all team members from API
   * @returns {Promise<Array>} Team members array
   */
  async getTeamMembers() {
    return await fetchTeamMembers();
  },

  /**
   * Get a specific team member from API
   * @param {string|number} id - Team member ID
   * @returns {Promise<Object>} Team member object
   */
  async getTeamMember(id) {
    return await fetchTeamMember(id);
  },

  /**
   * Add a new team member
   * @param {Object} teamMember - Team member data
   * @returns {Promise<Object>} Created team member object
   */
  async addTeamMember(teamMember) {
    return await addTeamMember(teamMember);
  }
};
