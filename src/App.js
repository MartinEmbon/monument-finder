import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import MonumentPage from "./Monument"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MonumentPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
