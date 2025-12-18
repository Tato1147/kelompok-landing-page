import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Reviews from './components/Reviews';
import About from './components/About';
import Services from './components/Services';
import { sectionsData } from './data/sectionsData';
import './styles/App.css';

function LandingPage() {
  const handleNavigation = (link) => {
    alert(`Navigating to: ${link}\n\nIn your actual implementation, this will redirect to the respective application.`);
  };

  return (
    <div className="landing-page">
      <Navbar />
      <Hero onNavigate={handleNavigation} />
      {sectionsData.map((section, index) => (
        <Section 
          key={section.id} 
          section={section} 
          index={index} 
          onNavigate={handleNavigation} 
        />
      ))}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;