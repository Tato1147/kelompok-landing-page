import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../services/api";
import '../styles/Login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {
            email: '',
            password: ''
        };

        if (!email.trim()) {
            newErrors.email = 'Mohon masukkan alamat email Anda';
        }

        if (!password.trim()) {
            newErrors.password = 'Mohon masukkan kata sandi Anda';
        }

        setErrors(newErrors);

        if (!newErrors.email && !newErrors.password) {
            setLoading(true);

            const result = await loginUser({ email, password});

            setLoading(false);

            if (result.success) {
                alert('Login berhasil');
                navigate('/');
            } else {
                alert(result.error);
            }
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-box">
                    <h1 className="auth-title">Log In</h1>
                    <p className="auth-subtitle">Selamat datang kembali di PRPL Desa</p>

                    <form onSubmit={handleSubmit} className="auth-form">
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
                            {errors.email && (
                                <span className="error-message">{errors.password}</span>
                            )}
                        </div>

                        <button type="submit" className="auth-button" disabled={loading}>
                            {loading ? 'Sedang log in...' : 'Log In'}
                        </button>
                    </form>

                    <p className="auth-footer">
                        Tidak punya akun? <a href="/signup">Daftar</a>
                    </p>

                    <a href="/" className="back-link">← Kembali ke Beranda</a>
                </div>
            </div>
        </div>
    );
}

export default Login;