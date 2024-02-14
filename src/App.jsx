import React from 'react';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ParticleComponent from './components/ParticleComponent';

const App = () => {
  return (
    <div>
      <Router>
        <ParticleComponent/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/yes" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
