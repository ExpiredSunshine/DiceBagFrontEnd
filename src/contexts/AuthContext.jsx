import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp, signIn, getCurrentUser } from '../api/authApi';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const navigate = useNavigate();

  // Check authentication status on app load
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      setIsAuthChecked(true);
      return;
    }

    getCurrentUser(token)
      .then(data => {
        setCurrentUser(data.user);
        setIsLoggedIn(true);
        // Redirect to roller route if user is authenticated and on home page
        if (window.location.pathname === '/') {
          navigate('/roller');
        }
      })
      .catch(() => {
        localStorage.removeItem('jwt');
      })
      .finally(() => {
        setIsAuthChecked(true);
      });
  }, [navigate]);

  const handleSignUp = async userData => {
    try {
      const data = await signUp(userData);
      localStorage.setItem('jwt', data.token);
      setCurrentUser(data.user);
      setIsLoggedIn(true);
      navigate('/roller'); // Redirect to roller route after successful registration
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Registration failed',
      };
    }
  };

  const handleSignIn = async credentials => {
    try {
      const data = await signIn(credentials);
      localStorage.setItem('jwt', data.token);
      setCurrentUser(data.user);
      setIsLoggedIn(true);
      navigate('/roller'); // Redirect to roller route after successful login
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Sign in failed',
      };
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setCurrentUser(null);
    setIsLoggedIn(false);
    navigate('/');
  };

  const updateCurrentUser = updatedUser => {
    setCurrentUser(updatedUser);
  };

  const value = {
    currentUser,
    isLoggedIn,
    isAuthChecked,
    signUp: handleSignUp,
    signIn: handleSignIn,
    signOut: handleSignOut,
    updateCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Export the context for use in the hook
export { AuthContext };
