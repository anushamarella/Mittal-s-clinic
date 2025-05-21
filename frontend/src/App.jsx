import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Dashboard from './Components/Dashboard';
import Doctors from './Pages/Doctors';
import Patients from './Pages/Patients';
import Services from './Pages/Services';
import Appointments from './Pages/Appointments';
import Billing from './Pages/Billing';
import Reports from './Pages/Reports';
import AddDoctor from './Pages/AddDoctor';
import AddPatient from './Pages/AddPatient';
import AddService from './Pages/AddService';
import AddAppointment from './Pages/AddAppointment';
import AddBilling from './Pages/AddBilling';
import Login from './Components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const handleSetIsAuthenticated = (value) => {
    localStorage.setItem('isAuthenticated', value);
    setIsAuthenticated(value);
  };

  return (
    <Routes>
      {!isAuthenticated ? (
        <Route path="*" element={<Login setIsAuthenticated={handleSetIsAuthenticated} />} />
      ) : (
        <Route path="/" element={<Layout setIsAuthenticated={handleSetIsAuthenticated} />}>
          <Route index element={<Dashboard />} />
          <Route path="doctors" element={<Doctors doctors={[]} setDoctors={() => {}} />} />
          <Route path="add-doctor" element={<AddDoctor doctors={[]} setDoctors={() => {}} />} />
          <Route path="patients" element={<Patients patients={[]} setPatients={() => {}} />} />
          <Route path="add-patient" element={<AddPatient patients={[]} setPatients={() => {}} />} />
          <Route path="services" element={<Services services={[]} setServices={() => {}} />} />
          <Route path="add-service" element={<AddService services={[]} setServices={() => {}} />} />
          <Route path="appointments" element={<Appointments appointments={[]} setAppointments={() => {}} />} />
          <Route path="add-appointment" element={<AddAppointment appointments={[]} setAppointments={() => {}} />} />
          <Route path="billing" element={<Billing bills={[]} setBills={() => {}} />} />
          <Route path="add-bill" element={<AddBilling bills={[]} setBills={() => {}} />} />
          <Route path="edit-bill/:id" element={<AddBilling bills={[]} setBills={() => {}} />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
