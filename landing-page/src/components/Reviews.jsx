import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { submitFeedback, getAllFeedback, isLoggedIn } from '../services/api';
import '../styles/Reviews.css';

function Reviews() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedApp, setSelectedApp] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [filterApp, setFilterApp] = useState('all');
  const [sortOrder, setSortOrder] = useState('highest');
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const applications = [
    'Finansial',
    'Infrastruktur',
    'UMKM Desa',
    'Edukasi',
    'Acara Desa'
  ];

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    setLoading(true);
    const result = await getAllFeedback();
    
    if (result.success) {
      const transformedReviews = result.data.map(item => ({
    id: item._id,
    app: item.type,
    userName: item.user?.username || 'Anonymous User',
    rating: item.rating,
    text: item.message,
    date: new Date(item.createdAt).toISOString().split('T')[0]
}));
      setReviews(transformedReviews);
    } else {
      console.error('Failed to fetch reviews:', result.error);
      if (result.error.includes('token') || result.error.includes('authorization')) {
        alert('Mohon log in untuk melihat ulasan');
      }
    }
    setLoading(false);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    
    if (!isLoggedIn()) {
      alert('Please log in to submit a review');
      navigate('/login');
      return;
    }

    if (!selectedApp || rating === 0 || !reviewText.trim()) {
      alert('Mohon lengkapi semua field!');
      return;
    }

    setSubmitting(true);

    const result = await submitFeedback({
    type: selectedApp,
    message: reviewText,
    rating: rating
});


    setSubmitting(false);

    if (result.success) {
      alert('Ulasan berhasil diposting!');
      
      setSelectedApp('');
      setRating(0);
      setReviewText('');
      setShowModal(false);
      
      fetchReviews();
    } else {
      alert(`Failed to submit review: ${result.error}`);
    }
  };

  const filteredAndSortedReviews = reviews
    .filter(review => filterApp === 'all' || review.app === filterApp)
    .sort((a, b) => {
      if (sortOrder === 'highest') {
        return b.rating - a.rating;
      } else {
        return a.rating - b.rating;
      }
    });

  const renderStars = (currentRating, isInteractive = false) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${star <= (isInteractive ? (hoverRating || rating) : currentRating) ? 'filled' : ''} ${isInteractive ? 'interactive' : ''}`}
        onClick={() => isInteractive && setRating(star)}
        onMouseEnter={() => isInteractive && setHoverRating(star)}
        onMouseLeave={() => isInteractive && setHoverRating(0)}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="reviews-page">
      <Navbar />
      
      <div className="reviews-header">
        <div className="reviews-header-content">
          <h1>Ulasan Pengguna</h1>
          <p>Lihat apa yang dikatakan pengguna lain tentang aplikasi kami</p>
        </div>
      </div>

      <div className="reviews-controls">
        <div className="reviews-controls-content">
          <div className="filters">
            <div className="filter-group">
              <label>Filter Aplikasi:</label>
              <select 
                value={filterApp} 
                onChange={(e) => setFilterApp(e.target.value)}
                className="filter-select"
              >
                <option value="all">Semua Aplikasi</option>
                {applications.map(app => (
                  <option key={app} value={app}>{app}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Urutkan:</label>
              <select 
                value={sortOrder} 
                onChange={(e) => setSortOrder(e.target.value)}
                className="filter-select"
              >
                <option value="highest">Rating Tertinggi</option>
                <option value="lowest">Rating Terendah</option>
              </select>
            </div>
          </div>

          <button className="write-review-btn" onClick={() => setShowModal(true)}>
            Tulis Ulasan
          </button>
        </div>
      </div>

      <div className="reviews-container">
        <div className="reviews-list">
          {loading ? (
            <div className="no-reviews">
              <p>Loading reviews...</p>
            </div>
          ) : filteredAndSortedReviews.length === 0 ? (
            <div className="no-reviews">
              <p>Belum ada ulasan untuk filter ini.</p>
            </div>
          ) : (
            filteredAndSortedReviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="review-user-info">
                    <div className="user-avatar">{review.userName[0]}</div>
                    <div>
                      <h3 className="user-name">{review.userName}</h3>
                      <p className="review-app">{review.app}</p>
                    </div>
                  </div>
                  <div className="review-meta">
                    <div className="review-rating">
                      {renderStars(review.rating)}
                    </div>
                    <p className="review-date">{review.date}</p>
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Write Review Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Tulis Ulasan</h2>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="review-form">
              <div className="form-group">
                <label>Pilih Aplikasi *</label>
                <select
                  value={selectedApp}
                  onChange={(e) => setSelectedApp(e.target.value)}
                  className="form-select"
                  required
                >
                  <option value="">-- Pilih Aplikasi --</option>
                  {applications.map(app => (
                    <option key={app} value={app}>{app}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Rating *</label>
                <div className="star-rating">
                  {renderStars(rating, true)}
                </div>
              </div>

              <div className="form-group">
                <label>Ulasan Anda *</label>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="form-textarea"
                  placeholder="Bagikan pengalaman Anda menggunakan aplikasi ini..."
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="submit-review-btn" disabled={submitting}>
                {submitting ? 'Posting...' : 'Posting Ulasan'}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="back-home">
        <a href="/">← Kembali ke Beranda</a>
      </div>
    </div>
  );
}

export default Reviews;