import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Flights from './pages/Flights';
import Bookings from './pages/Bookings';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-white min-h-screen overflow-hidden'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
