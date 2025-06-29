import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ClientDashboard from './pages/dashboard/client/ClientDashboard';
import AdminDashboard from './pages/dashboard/admin/AdminDashboard';
import GuardDashboard from './pages/dashboard/guard/GuardDashboard';
// import Services from './pages/Services';
import ContactComponent from './pages/Contact';
import AllServices from './pages/AllServices';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/services" element={<Services/>} /> */}
      <Route path="/contact" element={<ContactComponent />} />
      <Route path="/services" element={<AllServices />} />




      {/* <Route path='/outfit' element={<Outfit />} /> */}


      <Route path="/client" element={<ClientDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/guard" element={<GuardDashboard />} />
    </Routes>
  );
}