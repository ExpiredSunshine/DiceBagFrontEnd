import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import logoImage from '../../assets/images/logo.png';
import settingsImage from '../../assets/images/Settings.png';
import RegisterModal from '../RegisterModal/RegisterModal';
import SignInModal from '../SignInModal/SignInModal';
import SettingsModal from '../SettingsModal/SettingsModal';

import './Header.css';

export default function Header() {
  const location = useLocation();
  const isRollerRoute = location.pathname === '/roller';
  const { currentUser, isLoggedIn, signOut } = useAuth();

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleOpenSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const handleCloseSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  const handleOpenSettingsModal = () => {
    setIsSettingsModalOpen(true);
  };

  const handleCloseSettingsModal = () => {
    setIsSettingsModalOpen(false);
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <header className="header">
      <div className="header__logo-group">
        <Link to="/" className="header__logo-link">
          <div className="header__logo-container">
            <div className="header__logo-background"></div>
            <img src={logoImage} alt="DiceBag Logo" className="header__logo" />
          </div>
          <h1 className="header__title">DiceBag</h1>
        </Link>
      </div>

      {isLoggedIn && isRollerRoute ? (
        <div className="header__user-section">
          <span className="header__username">
            {currentUser?.name || 'User'}
          </span>
          <div className="header__avatar-container">
            <div className="header__avatar-background"></div>
            <img
              src={currentUser?.avatar || logoImage}
              alt="User Avatar"
              className="header__avatar"
            />
          </div>
          <button
            type="button"
            className="header__signout-btn"
            onClick={handleSignOut}
          >
            sign out
          </button>
          <img
            src={settingsImage}
            alt="Settings"
            className="header__settings-icon"
            onClick={handleOpenSettingsModal}
            style={{ cursor: 'pointer' }}
          />
        </div>
      ) : (
        <div className="header__auth-buttons">
          <button
            type="button"
            className="header__register-btn"
            onClick={handleOpenRegisterModal}
          >
            register
          </button>
          <button
            type="button"
            className="header__signin-btn"
            onClick={handleOpenSignInModal}
          >
            sign in
          </button>
        </div>
      )}

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={handleCloseRegisterModal}
      />
      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={handleCloseSignInModal}
      />
      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={handleCloseSettingsModal}
      />
    </header>
  );
}
