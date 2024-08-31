import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to ImagineDraw</h1>
      <p>Transform your ideas and images into beautiful drawing books!</p>
      <div className="cta-buttons">
        <Link to="/prompt-to-drawing" className="cta-button">Prompt to Drawing Book</Link>
        <Link to="/image-to-drawing" className="cta-button">Image to Page!</Link>
      </div>
    </div>
  );
}

export default LandingPage;
