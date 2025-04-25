import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
