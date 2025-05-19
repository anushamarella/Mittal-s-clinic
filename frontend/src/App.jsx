import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Dashboard from './Components/Dashboard'
import Doctors from './Pages/Doctors'
import Patients from './Pages/Patients'
import Services from './Pages/Services'
import Appointments from './Pages/Appointments'
import Billing from './Pages/Billing'
import Reports from './Pages/Reports'

function App() {
  return (
    <Routes>
      {/* Wrap the routes inside Layout so Sidebar is always visible */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="patients" element={<Patients />} />
        <Route path="services" element={<Services />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="billing" element={<Billing />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  )
}

export default App
