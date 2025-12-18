import React from 'react';
import '../styles/Hero.css';

function Hero({ onNavigate }) {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">Tentang PRPL Desa</h1>
            <p className="hero-description">
              Pelajari lebih lanjut tentang sejarah, visi, dan misi PRPL Desa. Temukan informasi lengkap mengenai platform kami.
            </p>
            <button 
              onClick={() => onNavigate('/tentang-desa')} 
              className="hero-button"
            >
              Selengkapnya
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;