import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-group">
        <Link to="/" className="header__logo-link">
          <div className="header__logo">🎲</div>
          <h1 className="header__title">DiceBag</h1>
        </Link>
      </div>

      <div className="header__auth-buttons">
        <button type="button" className="header__register-btn">
          register
        </button>
        <button type="button" className="header__signin-btn">
          sign in
        </button>
      </div>
    </header>
  );
}
