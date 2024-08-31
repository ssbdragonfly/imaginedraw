import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>Welcome to ImagineDraw</h1>
        <p>Transform your ideas and images into beautiful drawing books!</p>
      </div>
      <div className="features-section">
        <div className="feature">
          <i className="fas fa-magic"></i>
          <h2>Prompt to Drawing</h2>
          <p>Turn your words into art with our state of the art technology.</p>
          <Link to="/prompt-to-drawing" className="cta-button">Try It Now</Link>
        </div>
        <div className="feature">
          <i className="fas fa-image"></i>
          <h2>Image to Drawing</h2>
          <p>Convert your photos into stunning color book illustrations.</p>
          <Link to="/image-to-drawing" className="cta-button">Upload Image</Link>
        </div>
      </div>
      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <p>Choose your input: text prompt or image</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <p>ImagineDraw's workflow processes your input</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <p>Get your custom drawing book!!!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
