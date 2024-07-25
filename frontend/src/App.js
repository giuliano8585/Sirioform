import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterCenter from './components/RegisterCenter';
import RegisterInstructor from './components/RegisterInstructor';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import ProtectedComponent from './components/ProtectedComponent';
import CentersList from './components/CenterList';
import InstructorsList from './components/InstructorList';
import InstructorDashboard from './pages/InstructorDashboard'; // Importa il nuovo componente
import CenterDashboard from './pages/CenterDashboard'; // Importa il nuovo componente
import CreateKit from './components/CreateKit'; // Importa il componente CreateKit
import ViewKits from './components/ViewKits'; // Importa il componente ViewKits
import UnapprovedCenters from './pages/UnapprovedCenters';
import UnapprovedInstructors from './pages/UnapprovedInstructors';
import CreateSanitario from './pages/CreateSanitario';
import ListaSanitari from './pages/ListaSanitari';

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
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} /> {/* Aggiungi questa riga */}
        <Route path="/center-dashboard" element={<CenterDashboard />} /> {/* Aggiungi questa riga */}
        <Route path="/create-kit" element={<CreateKit />} /> {/* Aggiungi questa riga */}
        <Route path="/view-kits" element={<ViewKits />} /> {/* Aggiungi questa riga */}
        <Route path="/unapproved-centers" element={<UnapprovedCenters />} />
        <Route path="/unapproved-instructors" element={<UnapprovedInstructors />} />
        <Route path="/create-sanitario" element={<CreateSanitario />} />
        <Route path="/sanitarios-list" element={<ListaSanitari />} />
      </Routes>
    </Router>
  );
};

export default App;
