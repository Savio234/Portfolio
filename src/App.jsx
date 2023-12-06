import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Project from './pages/projects';
import Home from './pages/Home'

import './style.css';

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/projects' element={<Project />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
