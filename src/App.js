import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Project from './pages/projects';
import Lives from './pages/Lives';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import './style.css';

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Routes>
        <Route path='/projects' element={<Project />} />
        <Route path='lives' element={<Lives />} />
      </Routes>
    </>
  );
}

export default App;
