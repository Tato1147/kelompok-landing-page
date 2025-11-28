import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-content">
          <div className="logo-section">
            <span className="logo-text">PRPL Desa</span>
          </div>
          
          <div className="desktop-menu">
            <Link to="/">Beranda</Link>
            <a href="#layanan">Layanan</a>
            <Link to="/about">Tentang</Link>
            <Link to="/reviews">Ulasan</Link>
            <Link to="/login">
              <button className="btn-login">Log In</button>
            </Link>
            <Link to="/signup">
              <button className="btn-signup">Daftar</button>
            </Link>
          </div>

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

      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/">Beranda</Link>
          <a href="#layanan">Layanan</a>
          <Link to="/about">Tentang</Link>
          <Link to="/reviews">Ulasan</Link>
          <Link to="/login">
            <button className="btn-login">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="btn-signup">Daftar</button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;