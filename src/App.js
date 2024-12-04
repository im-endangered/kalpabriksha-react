// src/App.js
import './assets/styles/bootstrap.min.css'; // Bootstrap CSS
import './assets/styles/animate.css'; // Animations
import './assets/styles/personalized.css'; // Custom personalized styles
import './assets/styles/style.css'; // Main style
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; // Ensure this matches your `Home.js` file path
import BOD from './pages/bod';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bod" element={<BOD />} />
      </Routes>
    </Router>
  );
}
export default App;
