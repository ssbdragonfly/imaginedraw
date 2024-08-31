import React, { useState } from 'react';
import './ImageToDrawing.css';

function ImageToDrawing() {
  const [image, setImage] = useState(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted image:', image);
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
    </div>
  );
}

export default ImageToDrawing;
