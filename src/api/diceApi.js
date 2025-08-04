/**
 * DiceBag Frontend API Client
 *
 * Simple interface for communicating with the DiceBag backend API.
 * The backend handles all error processing, validation, and logging.
 */

// Base URL for API requests
const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

/**
 * Roll Dice via API
 *
 * Sends a POST request to the backend to roll dice with the specified quantities.
 * The backend handles all validation, error processing, and logging.
 *
 * @param {Object} diceQuantities - Object containing die types and quantities
 * @returns {Promise<Object>} - Roll results from the backend
 */
export const rollDiceAPI = async diceQuantities => {
  const response = await fetch(`${API_BASE_URL}/dice/roll`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ diceQuantities }),
  });

  return response.json();
};

/**
 * Get API Statistics
 *
 * Retrieves comprehensive statistics about the dice rolling API.
 * Includes usage statistics, performance metrics, and pool status.
 *
 * @returns {Promise<Object>} - API statistics
 */
export const getApiStats = async () => {
  const response = await fetch(`${API_BASE_URL}/dice/stats`);
  return response.json();
};
