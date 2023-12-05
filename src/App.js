// import logo from './logo.svg';
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import './style.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
