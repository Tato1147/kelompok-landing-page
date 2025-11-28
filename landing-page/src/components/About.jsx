import React from 'react';
import Navbar from './Navbar';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      <Navbar />
      
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>Tentang Kami</h1>
          <p>Platform Digital untuk Desa Sukamaju yang Lebih Maju dan Transparan</p>
        </div>
      </div>

      <div className="about-content">
        <div className="about-container">
          
          <section className="about-section">
            <div className="section-icon">🎯</div>
            <h2>Visi Kami</h2>
            <p>
              Menjadi desa digital yang inovatif, transparan, dan inklusif dalam memberikan pelayanan 
              kepada masyarakat serta mendorong pertumbuhan ekonomi lokal yang berkelanjutan.
            </p>
          </section>

          <section className="about-section">
            <div className="section-icon">🚀</div>
            <h2>Misi Kami</h2>
            <ul className="mission-list">
              <li>Meningkatkan transparansi pengelolaan keuangan dan pembangunan desa</li>
              <li>Memberikan akses mudah kepada warga untuk informasi dan layanan desa</li>
              <li>Mendukung perkembangan UMKM dan ekonomi lokal melalui platform digital</li>
              <li>Menyediakan sarana edukasi dan pelatihan untuk peningkatan keterampilan warga</li>
              <li>Membangun komunikasi yang efektif antara pemerintah desa dan masyarakat</li>
            </ul>
          </section>

          <section className="about-section">
            <div className="section-icon">💡</div>
            <h2>Tujuan Platform</h2>
            <div className="goals-grid">
              <div className="goal-card">
                <h3>Transparansi</h3>
                <p>Memberikan akses real-time terhadap informasi keuangan dan pembangunan desa</p>
              </div>
              <div className="goal-card">
                <h3>Efisiensi</h3>
                <p>Mempermudah proses administrasi dan layanan desa secara digital</p>
              </div>
              <div className="goal-card">
                <h3>Pemberdayaan</h3>
                <p>Mendukung UMKM lokal dan meningkatkan ekonomi desa</p>
              </div>
              <div className="goal-card">
                <h3>Edukasi</h3>
                <p>Menyediakan program pembelajaran dan pelatihan untuk seluruh warga</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <div className="section-icon">⚙️</div>
            <h2>Fitur-Fitur Utama</h2>
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-emoji">💰</span>
                <div>
                  <h4>Finansial</h4>
                  <p>Transparansi keuangan desa dengan laporan anggaran dan realisasi real-time</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-emoji">🏗️</span>
                <div>
                  <h4>Infrastruktur</h4>
                  <p>Pemantauan perkembangan pembangunan dan pengelolaan hubungan stakeholder</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-emoji">🏪</span>
                <div>
                  <h4>UMKM Desa</h4>
                  <p>Platform untuk mempromosikan dan mendukung produk lokal</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-emoji">📚</span>
                <div>
                  <h4>Edukasi</h4>
                  <p>Akses ke program bimbingan belajar dan kursus keterampilan</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-emoji">📅</span>
                <div>
                  <h4>Acara Desa</h4>
                  <p>Informasi lengkap tentang kegiatan dan pengumuman penting</p>
                </div>
              </div>
            </div>
          </section>

          <section className="about-section contact-section">
            <div className="section-icon">📧</div>
            <h2>Hubungi Kami</h2>
            <p>
              Kami selalu terbuka untuk saran, kritik, dan masukan dari Anda. 
              Mari bersama-sama membangun Desa Sukamaju yang lebih baik!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span>📍</span>
                <p>Desa Sukamaju, Kecamatan Sleman, Yogyakarta</p>
              </div>
              <div className="contact-item">
                <span>📞</span>
                <p>+62 274 XXX XXXX</p>
              </div>
              <div className="contact-item">
                <span>✉️</span>
                <p>info@desasukamaju.id</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default About;