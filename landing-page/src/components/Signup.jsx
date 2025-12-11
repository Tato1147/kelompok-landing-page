import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { registerUser } from "../services/api";
import '../styles/Login.css';

function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // FIXED

        const newErrors = {};

        if (!username.trim()) newErrors.username = 'Mohon masukkan nama pengguna Anda';
        if (!email.trim()) newErrors.email = 'Mohon masukkan alamat email Anda';
        if (!password.trim()) newErrors.password = 'Mohon masukkan kata sandi Anda';

        setErrors(newErrors);

        // Proceed only if no validation errors
        if (Object.keys(newErrors).length === 0) {
            setLoading(true);

            const result = await registerUser({ username, email, password });

            setLoading(false);

            if (result.success) {
                alert('Pendaftaran berhasil! Mohon login.');
                navigate('/login');
            } else {
                alert(result.error || "Terjadi kesalahan saat mendaftar.");
            }
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-box">
                    <h1 className="auth-title">Daftar</h1>
                    <p className="auth-subtitle">Buat akun Anda untuk PRPL Desa</p>

                    <form onSubmit={handleSubmit} className="auth-form">

                        {/* USERNAME */}
                        <div className="form-group">
                            <label htmlFor="username">Nama Pengguna</label>
                            <input
                                type="text"
                                id="username"
                                className={`form-input ${errors.username ? 'error' : ''}`}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Masukkan nama pengguna Anda"
                            />
                            {errors.username && (
                                <span className="error-message">{errors.username}</span>
                            )}
                        </div>

                        {/* EMAIL */}
                        <div className="form-group">
                            <label htmlFor="email">Alamat Email</label>
                            <input
                                type="email"
                                id="email"
                                className={`form-input ${errors.email ? 'error' : ''}`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Masukkan alamat email Anda"
                            />
                            {errors.email && (
                                <span className="error-message">{errors.email}</span>
                            )}
                        </div>

                        {/* PASSWORD */}
                        <div className="form-group">
                            <label htmlFor="password">Kata Sandi</label>
                            <input
                                type="password"
                                id="password"
                                className={`form-input ${errors.password ? 'error' : ''}`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Masukkan kata sandi Anda"
                            />
                            {errors.password && (
                                <span className="error-message">{errors.password}</span>
                            )}
                        </div>

                        <button type="submit" className="auth-button" disabled={loading}>
                            {loading ? 'Sedang mendaftar...' : 'Daftar'}
                        </button>
                    </form>

                    <p className="auth-footer">
                        Sudah punya akun? <a href="/login">Log In</a>
                    </p>

                    <a href="/" className="back-link">← Kembali ke Beranda</a>
                </div>
            </div>
        </div>
    );
}

export default Signup;