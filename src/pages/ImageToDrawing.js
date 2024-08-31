import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ImageToDrawing.css';

function ImageToDrawing() {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const canvasRef = useRef(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const processImage = () => {
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i<data.length; i += 4) {
        const avg =(data[i] + data[i + 1] + data[i + 2]) / 3;
        const threshold =128;
        const color = avg> threshold ? 255 : 0;
        data[i] = data[i + 1] = data[i + 2] =color;
      }
      
      ctx.putImageData(imageData, 0, 0);
      setProcessedImage(canvas.toDataURL());
    };
    img.src = image;
  };
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      processImage();
    }
  };

  return (
    <div className="image-to-drawing">
      <h2>Create Drawing Book via Image</h2>
      <form onSubmit={handleSubmit}>
        <div className="image-upload-area">
          {image ? (
            <img src={image} alt="Uploaded" className="preview-image" />
          ) : (
            <label htmlFor="image-upload">
              Click here to upload an image
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </label>
          )}
        </div>
        <button type="submit" disabled={!image}>
          Generate Drawing Book
        </button>
      </form>
      {processedImage && (
        <div className="processed-image">
          <h3>Processed Image</h3>
          <img src={processedImage} alt="Processed" className="preview-image" />
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}

export default ImageToDrawing;
