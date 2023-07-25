import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechForm from './TechForm'
import TechList from './TechList'
import AppointmentList from './AppointmentList'
import AppointmentForm from './AppointmentForm'
import ServiceHistory from './ServiceHistory';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/appointments" element={<AppointmentList />} />
          <Route path="/appointments/new" element={<AppointmentForm />} />
          <Route path="/service_history" element={<ServiceHistory />} />
          <Route path="/technicians/" element={<TechList />} />
          <Route path="/technicians/new" element={<TechForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
