import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';
import ScrollToAnchor from './utils/ScrollToAnchor';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
