import { Link } from 'react-router-dom';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-group">
        <Link to="/" className="footer__logo-link">
          <div className="footer__logo">🎲</div>
          <h1 className="footer__title">Footer</h1>
        </Link>
      </div>
    </footer>
  );
}
