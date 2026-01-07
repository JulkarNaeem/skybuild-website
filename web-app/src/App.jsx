import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header';
import { Footer } from './components/Extras';
import Home from './components/Home';
import About from './components/About';
import ProjectDetails from './components/ProjectDetails';
import ScrollToAnchor from './utils/ScrollToAnchor';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
