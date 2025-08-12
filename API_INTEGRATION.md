# API Integration Guide

## Team API Integration

The DTS Portal now includes API integration to fetch team member information dynamically from a backend service.

### Setup

1. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   Update the `REACT_APP_API_URL` in your `.env` file to point to your backend API.

2. **Expected API Endpoint**
   The application expects a REST API at `/api/team` that returns team member data.

### API Contract

#### GET /api/team
Returns an array of team member objects.

**Response Format:**
```json
[
  {
    "id": 1,
    "name": "Dharma Teja",
    "position": "Founder and CEO",
    "description": "Visionary leader with expertise in full-stack development and AI technologies.",
    "avatar": "https://example.com/avatar.jpg", // Optional
    "email": "dharmateja@dts.com", // Optional
    "linkedin": "https://linkedin.com/in/dharma-teja" // Optional
  }
]
```

**Required Fields:**
- `id`: Unique identifier (number or string)
- `name`: Team member's full name
- `position`: Job title/role
- `description`: Brief bio or description

**Optional Fields:**
- `avatar`: URL to profile image
- `email`: Contact email
- `linkedin`: LinkedIn profile URL

### Error Handling

The application includes robust error handling:
- **Network Errors**: Falls back to default team data
- **Invalid Responses**: Shows error message and uses fallback
- **Loading States**: Displays spinner while fetching data

### Fallback Data

If the API is unavailable, the application uses built-in fallback data defined in `src/services/teamService.js`.

### Development

To test the API integration:

1. **Start your backend server** (should serve the team API)
2. **Update the API URL** in `.env` file
3. **Start the React application**:
   ```bash
   npm start
   ```

### Backend Implementation Example

Here's a simple Node.js/Express example of the expected API:

```javascript
// Example backend API endpoint
app.get('/api/team', (req, res) => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dharma Teja',
      position: 'Founder and CEO',
      description: 'Visionary leader with expertise in full-stack development and AI technologies.',
      avatar: null,
      email: 'dharmateja@dts.com',
      linkedin: 'https://linkedin.com/in/dharma-teja'
    }
    // Add more team members as needed
  ];
  
  res.json(teamMembers);
});
```

### CORS Configuration

Make sure your backend is configured to allow CORS requests from your React application domain.
