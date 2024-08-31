import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './DrawingResult.css';

function DrawingResult() {
  const location = useLocation();
  const { images, title } = location.state;
  const handleDownload = (imageUrl, index) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `drawing_${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="drawing-result">
      <h2>{title}</h2>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image} alt={`Drawing ${index + 1}`} className="drawing-image" />
            <button onClick={() => handleDownload(image, index)}>Download</button>
          </div>
        ))}
      </div>
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
}

export default DrawingResult;