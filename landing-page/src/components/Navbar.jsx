import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, logoutUser } from "../services/api";
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const loggedIn = isLoggedIn(); // Check token

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logoutUser();
    setIsMenuOpen(false);
    navigate("/");
    window.location.reload(); // Refresh nav state
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-content">
          <div className="logo-section">
            <span className="logo-text">PRPL Desa</span>
          </div>
          
          {/* DESKTOP MENU */}
          <div className="desktop-menu">
            <Link to="/">Beranda</Link>
            <Link to="/services">Layanan</Link>
            <Link to="/about">Tentang</Link>
            <Link to="/reviews">Ulasan</Link>

            {/* SHOW THESE ONLY IF NOT LOGGED IN */}
            {!loggedIn && (
              <>
                <Link to="/login">
                  <button className="btn-login">Log In</button>
                </Link>
                <Link to="/signup">
                  <button className="btn-signup">Daftar</button>
                </Link>
              </>
            )}

            {/* SHOW LOGOUT IF LOGGED IN */}
            {loggedIn && (
              <button className="btn-login" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="menu-icon">
              {isMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Beranda</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Layanan</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>Tentang</Link>
          <Link to="/reviews" onClick={() => setIsMenuOpen(false)}>Ulasan</Link>

          {!loggedIn && (
            <>
              <Link to="/login">
                <button className="btn-login" onClick={() => setIsMenuOpen(false)}>Log In</button>
              </Link>
              <Link to="/signup">
                <button className="btn-signup" onClick={() => setIsMenuOpen(false)}>Daftar</button>
              </Link>
            </>
          )}

          {loggedIn && (
            <button className="btn-login" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;