import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logoImage from '../../assets/images/logo.png';
import settingsImage from '../../assets/images/Settings.png';
import RegisterModal from '../RegisterModal/RegisterModal';

import './Header.css';

export default function Header() {
  const location = useLocation();
  const isRollerRoute = location.pathname === '/roller';
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
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

      {isRollerRoute ? (
        <div className="header__user-section">
          <span className="header__username">John Doe</span>
          <div className="header__avatar-container">
            <div className="header__avatar-background"></div>
            <img src={logoImage} alt="User Avatar" className="header__avatar" />
          </div>
          <button type="button" className="header__signout-btn">
            sign out
          </button>
          <img
            src={settingsImage}
            alt="Settings"
            className="header__settings-icon"
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
          <button type="button" className="header__signin-btn">
            sign in
          </button>
        </div>
      )}

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={handleCloseRegisterModal}
      />
    </header>
  );
}
