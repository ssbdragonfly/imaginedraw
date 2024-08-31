import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import PromptToDrawing from './pages/PromptToDrawing';
import ImageToDrawing from './pages/ImageToDrawing';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/prompt-to-drawing" element={<PromptToDrawing />} />
          <Route path="/image-to-drawing" element={<ImageToDrawing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
