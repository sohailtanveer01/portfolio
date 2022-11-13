import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SocialLinks from './components/Socials';
import Home from './pages/Home';
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <SocialLinks />
    </Router>
  );
}

export default App;
