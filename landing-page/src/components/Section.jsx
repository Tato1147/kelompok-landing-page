import React from 'react';
import '../styles/Section.css';

function Section({ section, index, onNavigate }) {
  const isEven = index % 2 === 0;

  const isExternalLink = section.link.startsWith('http');

  const handleClick = () => {
    if (isExternalLink) {
      window.open(section.link, '_blank', 'noopener, noreferrer');
    } else {
      onNavigate(section.link);
    }
  };
  
  return (
    <div className={`section section-${section.bgColor}`}>
      <div className="section-container">
        <div className={`section-grid ${!isEven ? 'reverse' : ''}`}>
          {isEven ? (
            <React.Fragment>
              <div className={`section-content text-${section.textColor}`}>
                <div className="section-header">
                  <span className="section-emoji">{section.emoji}</span>
                  <h2 className="section-title">{section.title}</h2>
                </div>
                <p className="section-description">{section.description}</p>
                <button 
                  onClick={handleClick} 
                  className="section-button"
                >
                  Selengkapnya
                  <span className="arrow">→</span>
                </button>
              </div>
              <div className="section-image-wrapper">
                <div className="section-image">
                  <span className="section-image-emoji">{section.emoji}</span>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="section-image-wrapper">
                <div className="section-image">
                  <span className="section-image-emoji">{section.emoji}</span>
                </div>
              </div>
              <div className={`section-content text-${section.textColor}`}>
                <div className="section-header">
                  <span className="section-emoji">{section.emoji}</span>
                  <h2 className="section-title">{section.title}</h2>
                </div>
                <p className="section-description">{section.description}</p>
                <button 
                  onClick={handleClick} 
                  className="section-button"
                >
                  Selengkapnya
                  <span className="arrow">→</span>
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default Section;