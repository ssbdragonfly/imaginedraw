import React, { useState } from 'react';
import './PromptToDrawing.css';

function PromptToDrawing() {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted prompt:', prompt);
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
        <button type="submit">Generate Drawing Book</button>
      </form>
    </div>
  );
}

export default PromptToDrawing;
