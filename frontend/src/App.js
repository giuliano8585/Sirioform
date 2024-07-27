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
import InstructorDashboard from './pages/InstructorDashboard';
import CenterDashboard from './pages/CenterDashboard';
import CreateKit from './components/CreateKit';
import ViewKits from './components/ViewKits';
import UnapprovedCenters from './pages/UnapprovedCenters';
import UnapprovedInstructors from './pages/UnapprovedInstructors';
import CreateSanitario from './pages/CreateSanitario';
import ListaSanitari from './pages/ListaSanitari';
import CenterSanitarios from './pages/CenterSanitarios';
import ViewSanitarios from './components/ViewSanitarios';
import ViewInstructorSanitarios from './components/ViewInstructorSanitarios';

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
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/center-dashboard" element={<CenterDashboard />} />
        <Route path="/create-kit" element={<CreateKit />} />
        <Route path="/view-kits" element={<ViewKits />} />
        <Route path="/unapproved-centers" element={<UnapprovedCenters />} />
        <Route path="/unapproved-instructors" element={<UnapprovedInstructors />} />
        <Route path="/create-sanitario" element={<CreateSanitario />} />
        <Route path="/sanitarios-list" element={<ListaSanitari />} />
        <Route path="/center-sanitarios" element={<CenterSanitarios />} />
        <Route path="/view-sanitarios" element={<ViewSanitarios />} />
        <Route path="/view-instructor-sanitarios" element={<ViewInstructorSanitarios />} />
      </Routes>
    </Router>
  );
};

export default App;

