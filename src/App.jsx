import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Process from './pages/Process';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/process" element={<Process />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
