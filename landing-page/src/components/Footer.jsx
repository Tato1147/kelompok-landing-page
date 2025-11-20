import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-title">PRPL Desa</h3>
            <p className="footer-description">
              Platform digital untuk meningkatkan pelayanan dan transparansi di desa
            </p>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Produk</h4>
            <ul className="footer-links">
              <li><a href="#layanan">Layanan Desa</a></li>
              <li><a href="#portal">Portal Warga</a></li>
              <li><a href="#umkm">UMKM</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Resource</h4>
            <ul className="footer-links">
              <li><a href="#blog">Blog</a></li>
              <li><a href="#panduan">Panduan</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#tentang">Tentang Kami</a></li>
              <li><a href="#kontak">Kontak</a></li>
              <li><a href="#karir">Karir</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © Jogja | Privacy Policy | Security | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;