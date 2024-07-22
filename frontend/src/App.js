// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterCenter from './components/RegisterCenter';
import RegisterInstructor from './components/RegisterInstructor';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import ProtectedComponent from './components/ProtectedComponent';
import CentersList from './components/CenterList'; // Nota: Assicurati che sia CenterList.js
import InstructorsList from './components/InstructorList'; // Nota: Assicurati che sia InstructorList.js

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register-center" element={<RegisterCenter />} />
        <Route path="/register-instructor" element={<RegisterInstructor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<ProtectedComponent />} />
        <Route path="/centers-list" element={<CentersList />} />
        <Route path="/instructors-list" element={<InstructorsList />} />
      </Routes>
    </Router>
  );
};

export default App;


