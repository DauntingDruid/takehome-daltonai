import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/aboutus';
import Auth from './pages/auth';
import Letsgetstarted from './pages/Letsgetstarted';
import StartPage from './components/Startpage';
import Registration from './pages/Registeration';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutUs />} /> {/* Set AboutUs as the default route */}
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/letsgetstarted" element={<Letsgetstarted />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/startpage" element={<StartPage />} />
    </Routes>
  );
}

export default App;