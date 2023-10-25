import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Home } from './views/Home'
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portafolio" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
