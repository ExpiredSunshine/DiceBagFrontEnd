/**
 * History API Client
 *
 * Interface for managing user roll history with the backend API.
 */

// Base URL for API requests
const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

/**
 * Get user's roll history
 *
 * @param {string} token - JWT authentication token
 * @returns {Promise<Object>} - User's roll history
 */
export const getRollHistory = async token => {
  const response = await fetch(`${API_BASE_URL}/history`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch roll history');
  }

  return response.json();
};

/**
 * Add roll to user's history
 *
 * @param {string} token - JWT authentication token
 * @param {Object} rollData - Roll data to add to history
 * @returns {Promise<Object>} - Updated roll history
 */
export const addRollToHistory = async (token, rollData) => {
  const response = await fetch(`${API_BASE_URL}/history`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ rollData }),
  });

  if (!response.ok) {
    throw new Error('Failed to add roll to history');
  }

  return response.json();
};

/**
 * Clear user's roll history
 *
 * @param {string} token - JWT authentication token
 * @returns {Promise<Object>} - Success response
 */
export const clearRollHistory = async token => {
  const response = await fetch(`${API_BASE_URL}/history`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to clear roll history');
  }

  return response.json();
};
