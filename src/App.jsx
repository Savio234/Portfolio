import { Routes, Route } from 'react-router-dom'
import { AppProvider } from '../src/contexts/AppContext';
import Nav from './components/Nav/Nav'
import Project from './pages/projects';
import Home from './pages/Home'

import './style.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Project />} />
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
