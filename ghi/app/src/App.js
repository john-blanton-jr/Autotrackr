import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechForm from './TechForm'
import TechList from './TechList'
import AppointmentList from './AppointmentList'
import AppointmentForm from './AppointmentForm'
import ServiceHistory from './ServiceHistory';
import SalespeopleList from './SalespeopleList';
import SalespersonForm from './SalespersonForm';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import SalesList from './SalesList';
import SalesForm from './SalesForm';
import SalespersonHistory from './SalespersonHistory';
import ManufacturerList from './ManufacturerList';
import NewManufacturer from './ManufacturerForm';
import ModelsList from './ModelsList';

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
          <Route path="salespeople" element={<SalespeopleList />} />
          <Route path="salespeople/create" element={<SalespersonForm />} />
          <Route path="customers" element={<CustomerList />} />
          <Route path="customers/create" element={<CustomerForm />} />
          <Route path="sales" element={<SalesList />} />
          <Route path="sales/create" element={<SalesForm />} />
          <Route path="sales/history" element={<SalespersonHistory />} />
          <Route path="/manufacturers" element={<ManufacturerList />} />
          <Route path="/manufacturers/new" element={<NewManufacturer />} />
          <Route path="/models" element={<ModelsList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
