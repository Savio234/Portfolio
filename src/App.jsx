import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from '../src/contexts/AppContext';
import { Footer, Nav } from './shared';
import Project from './pages/projects';
import About from './pages/about';
import Home from './pages/Home';
import './style.css';

function App() {
  return (
    <AppProvider>
      <React.Fragment>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </React.Fragment>
    </AppProvider>
  );
}

export default App;
