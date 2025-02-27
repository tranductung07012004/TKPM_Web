import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PDP from './pages/PDP';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PDP />} />
      </Routes>
    </Router>
  );
}

export default App;
