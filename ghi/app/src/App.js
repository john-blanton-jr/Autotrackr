import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechForm from './service/TechForm'
import TechList from './service/TechList'
import AppointmentList from './service/AppointmentList'
import AppointmentForm from './service/AppointmentForm'
import ServiceHistory from './service/ServiceHistory';
import SalespeopleList from './sales/SalespeopleList';
import SalespersonForm from './sales/SalespersonForm';
import CustomerList from './sales/CustomerList';
import CustomerForm from './sales/CustomerForm';
import SalesList from './sales/SalesList';
import SalesForm from './sales/SalesForm';
import SalespersonHistory from './sales/SalespersonHistory';
import ManufacturerList from './ManufacturerList';
import NewManufacturer from './ManufacturerForm';
import ModelsList from './ModelsList';
import ModelForm from './ModelForm';
import AutoList from './AutoList';
import AutoForm from './AutoForm';

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
          <Route path="models/create" element={<ModelForm />} />
          <Route path="automobiles/" element={<AutoList />} />
          <Route path="automobiles/create" element={<AutoForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
