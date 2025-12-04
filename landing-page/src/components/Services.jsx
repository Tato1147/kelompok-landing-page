import React from 'react';
import Navbar from './Navbar';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      id: 'tentang-desa',
      title: 'Tentang Desa',
      emoji: '🏘️',
      color: '#1e3a8a',
      description: 'Platform informasi lengkap tentang profil, sejarah, visi, dan misi Desa Sukamaju.',
      features: [
        'Profil lengkap desa dan pemerintahan',
        'Sejarah dan perkembangan desa',
        'Visi dan misi pembangunan desa',
        'Data demografi dan geografis',
        'Struktur organisasi pemerintahan desa'
      ],
      benefits: [
        'Akses mudah ke informasi profil desa',
        'Transparansi data dan informasi publik',
        'Memahami arah pembangunan desa'
      ]
    },
    {
      id: 'finansial',
      title: 'Finansial',
      emoji: '💰',
      color: '#059669',
      description: 'Sistem transparansi keuangan desa yang memungkinkan warga memantau anggaran dan realisasi dana desa secara real-time.',
      link: 'https://prpl-q5jk.vercel.app/',
      features: [
        'Laporan anggaran pendapatan dan belanja desa (APBDes)',
        'Realisasi penggunaan dana desa',
        'Grafik dan visualisasi keuangan',
        'Rincian belanja per sektor',
        'Laporan keuangan bulanan dan tahunan',
        'Transparansi sumber dana dan alokasi'
      ],
      benefits: [
        'Meningkatkan kepercayaan masyarakat',
        'Akuntabilitas pengelolaan keuangan',
        'Mudah dipahami dengan visualisasi data',
        'Akses informasi kapan saja'
      ]
    },
    {
      id: 'infrastruktur',
      title: 'Infrastruktur',
      emoji: '🏗️',
      color: '#dc2626',
      description: 'Platform untuk memantau perkembangan pembangunan infrastruktur desa dan mengelola hubungan dengan stakeholder.',
      link: 'https://newtest-qa2f0qbv4-artymates-projects.vercel.app/',
      features: [
        'Daftar proyek pembangunan yang sedang berjalan',
        'Status dan progres pembangunan real-time',
        'Lokasi proyek dengan peta interaktif',
        'Timeline dan jadwal pelaksanaan',
        'Dokumentasi foto dan video progres',
        'Informasi kontraktor dan stakeholder',
        'Laporan penyelesaian proyek'
      ],
      benefits: [
        'Transparansi pembangunan infrastruktur',
        'Masyarakat dapat memantau progres',
        'Koordinasi yang lebih baik dengan stakeholder',
        'Akuntabilitas pelaksanaan proyek'
      ]
    },
    {
      id: 'umkm',
      title: 'UMKM Desa',
      emoji: '🏪',
      color: '#7c3aed',
      description: 'Platform untuk mempromosikan dan mendukung perkembangan Usaha Mikro Kecil Menengah di desa.',
      link: 'https://huggingface.co/spaces/madrazaldi/UMKM-APP',
      features: [
        'Katalog produk UMKM lokal',
        'Profil pengusaha dan wirausaha desa',
        'Informasi kontak dan lokasi UMKM',
        'Galeri produk dengan foto dan deskripsi',
        'Kategori produk (kuliner, kerajinan, dll)',
        'Testimoni dan ulasan pelanggan',
        'Informasi pelatihan dan workshop UMKM'
      ],
      benefits: [
        'Meningkatkan visibilitas produk lokal',
        'Mendukung ekonomi desa',
        'Mempermudah akses konsumen ke produk lokal',
        'Membantu pengembangan usaha'
      ]
    },
    {
      id: 'edukasi',
      title: 'Edukasi',
      emoji: '📚',
      color: '#ea580c',
      description: 'Platform pembelajaran dan pelatihan untuk meningkatkan keterampilan dan pengetahuan warga desa.',
      link: 'https://eduvillage.vercel.app/register',
      features: [
        'Program bimbingan belajar untuk pelajar',
        'Kursus keterampilan dan pelatihan vokasi',
        'Materi pembelajaran digital',
        'Jadwal kelas dan pelatihan',
        'Sertifikat kompetensi',
        'Forum diskusi dan tanya jawab',
        'Informasi beasiswa dan program pendidikan'
      ],
      benefits: [
        'Peningkatan kualitas pendidikan',
        'Akses ke materi pembelajaran berkualitas',
        'Pengembangan keterampilan praktis',
        'Kesempatan belajar sepanjang hayat'
      ]
    },
    {
      id: 'acara',
      title: 'Acara Desa',
      emoji: '📅',
      color: '#0891b2',
      description: 'Pusat informasi untuk semua kegiatan, acara, dan pengumuman penting di desa.',
      link: 'https://acara-desa.up.railway.app/',
      features: [
        'Kalender acara dan kegiatan desa',
        'Pengumuman penting dari pemerintah desa',
        'Undangan kegiatan gotong royong',
        'Informasi perayaan dan tradisi',
        'Agenda rapat dan musyawarah',
        'Notifikasi pengingat acara',
        'Galeri dokumentasi kegiatan'
      ],
      benefits: [
        'Warga tidak ketinggalan informasi',
        'Partisipasi aktif dalam kegiatan desa',
        'Komunikasi yang lebih baik',
        'Dokumentasi kegiatan yang terorganisir'
      ]
    }
  ];

  const handleAccessApp = (link) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = link;
    }
  };

  return (
    <div className="services-page">
      <Navbar />
      
      <div className="services-hero">
        <div className="services-hero-content">
          <h1>Layanan Kami</h1>
          <p>Berbagai aplikasi digital untuk meningkatkan pelayanan dan pemberdayaan masyarakat Desa Sukamaju</p>
        </div>
      </div>

      <div className="services-content">
        <div className="services-container">
          {services.map((service, index) => (
            <div key={service.id} className="service-card">
              <div className="service-header" style={{ backgroundColor: service.color }}>
                <div className="service-emoji">{service.emoji}</div>
                <h2 className="service-title">{service.title}</h2>
              </div>
              
              <div className="service-body">
                <p className="service-description">{service.description}</p>
                
                <div className="service-section">
                  <h3>✨ Fitur Utama</h3>
                  <ul className="service-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-section">
                  <h3>🎯 Manfaat</h3>
                  <ul className="service-list benefits-list">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <button className="service-button" style={{ backgroundColor: service.color }} onClick={() => handleAccessApp(service.link)}>
                  Akses Aplikasi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="services-cta">
        <div className="cta-content">
          <h2>Siap Menggunakan Layanan Kami?</h2>
          <p>Daftar sekarang dan nikmati kemudahan akses ke semua layanan digital PRPL Desa</p>
          <div className="cta-buttons">
            <a href="/signup" className="cta-button primary">Daftar Sekarang</a>
            <a href="/about" className="cta-button secondary">Pelajari Lebih Lanjut</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;