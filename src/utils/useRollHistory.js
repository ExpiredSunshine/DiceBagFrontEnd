import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../contexts/useAuth';
import {
  getRollHistory,
  addRollToHistory,
  clearRollHistory,
} from '../api/historyApi';

const LOCAL_STORAGE_KEY = 'dicebag_roll_history';
const SERVER_TIMESTAMP_KEY = 'dicebag_server_timestamp';
const NON_LOGGED_IN_LIMIT = 50;
const LOGGED_IN_LIMIT = 200;

export const useRollHistory = () => {
  const { isLoggedIn } = useAuth();
  const [rollHistory, setRollHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadHistory = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (isLoggedIn) {
        // Load from server for logged-in users
        const token = localStorage.getItem('jwt');
        if (token) {
          const response = await getRollHistory(token);
          setRollHistory(response.rollHistory || []);
        }
      } else {
        // For non-logged-in users, check if server is available
        // If server is not responding, clear localStorage (server restart)
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL || 'http://localhost:3001/api'}/health`
          );
          if (!response.ok) {
            // Server is not responding, clear localStorage
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            localStorage.removeItem(SERVER_TIMESTAMP_KEY);
            setRollHistory([]);
            return;
          }
        } catch {
          // Server is not available, clear localStorage
          localStorage.removeItem(LOCAL_STORAGE_KEY);
          localStorage.removeItem(SERVER_TIMESTAMP_KEY);
          setRollHistory([]);
          return;
        }

        // Server is available, load from localStorage
        const savedHistory = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedHistory) {
          setRollHistory(JSON.parse(savedHistory));
        } else {
          setRollHistory([]);
        }
      }
    } catch (err) {
      console.error('Error loading roll history:', err);
      setError('Failed to load roll history');
      // Fallback to empty array
      setRollHistory([]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoggedIn]);

  // Load history on mount and when login status changes
  useEffect(() => {
    loadHistory();
  }, [isLoggedIn]);

  const addRoll = useCallback(
    async rollData => {
      // Defensive check for rollData
      if (!rollData || !rollData.rolls || !Array.isArray(rollData.rolls)) {
        console.warn('Invalid rollData provided to addRoll:', rollData);
        return;
      }

      const formattedRoll = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        diceRolled: rollData.rolls
          .map(roll => `${roll.quantity}${roll.diceType}`)
          .join(', '),
        total: rollData.grandTotal,
        details: rollData.rolls,
      };

      try {
        if (isLoggedIn) {
          // Save to server for logged-in users
          const token = localStorage.getItem('jwt');
          if (token) {
            await addRollToHistory(token, formattedRoll);
            // Reload history from server
            await loadHistory();
          }
        } else {
          // Save to localStorage for non-logged-in users
          setRollHistory(prev => {
            const newHistory = [formattedRoll, ...prev];
            // Limit to 50 entries for non-logged-in users
            const limitedHistory = newHistory.slice(0, NON_LOGGED_IN_LIMIT);
            localStorage.setItem(
              LOCAL_STORAGE_KEY,
              JSON.stringify(limitedHistory)
            );
            return limitedHistory;
          });
        }
      } catch (err) {
        console.error('Error adding roll to history:', err);
        setError('Failed to save roll to history');
      }
    },
    [isLoggedIn, loadHistory]
  );

  const clearHistory = useCallback(async () => {
    try {
      if (isLoggedIn) {
        // Clear from server for logged-in users
        const token = localStorage.getItem('jwt');
        if (token) {
          await clearRollHistory(token);
          setRollHistory([]);
        }
      } else {
        // Clear from localStorage for non-logged-in users
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        setRollHistory([]);
      }
    } catch (err) {
      console.error('Error clearing roll history:', err);
      setError('Failed to clear roll history');
    }
  }, [isLoggedIn]);

  const getHistoryLimit = useCallback(() => {
    return isLoggedIn ? LOGGED_IN_LIMIT : NON_LOGGED_IN_LIMIT;
  }, [isLoggedIn]);

  return {
    rollHistory,
    addRoll,
    clearHistory,
    isLoading,
    error,
    getHistoryLimit,
    isLoggedIn,
  };
};
