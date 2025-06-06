import { Routes, Route } from 'react-router-dom'
import { AppProvider } from '../src/contexts/AppContext';
import { Nav } from './components'
import Project from './pages/projects';
import Home from './pages/Home'

import './style.css';

function App() {
  return (
    <AppProvider>
      <>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Project />} />
        </Routes>
      </>
    </AppProvider>
  );
}

export default App;
