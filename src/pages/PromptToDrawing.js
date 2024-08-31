import React, { useState } from 'react';
import { searchImages } from '../api/PexelsApi';
import './PromptToDrawing.css';

function PromptToDrawing() {
  const [prompt, setPrompt] = useState('');
  const [drawingBook, setDrawingBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const images = await searchImages(prompt);
    const processedImages = await Promise.all(images.map(processImage));
    setDrawingBook(processedImages);
    setLoading(false);
  };

  const processImage = async (image) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          const threshold = 128;
          const color = avg > threshold ? 255 : 0;
          data[i] = data[i + 1] = data[i + 2] = color;
        }
        
        ctx.putImageData(imageData, 0, 0);
        resolve(canvas.toDataURL());
      };
      img.src = image.src.medium;
    });
  };

  return (
    <div className="prompt-to-drawing">
      <h2>Create a Drawing Book just from a Prompt</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          rows="4"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Drawing Book'}
        </button>
      </form>
      {drawingBook.length > 0 && (
        <div className="drawing-book">
          <h3>Your Drawing Book</h3>
          <div className="image-gallery">
            {drawingBook.map((image, index) => (
              <img key={index} src={image} alt={`Drawing ${index + 1}`} className="drawing-image" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PromptToDrawing;
