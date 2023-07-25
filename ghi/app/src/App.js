import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalespeopleList from './SalespeopleList'
import SalespersonForm from './SalespersonForm'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'
import SalesForm from './SalesForm'
import SalesList from './SalesList'
import SalespersonHistory from './SalespersonHistory'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="salespeople" element={<SalespeopleList />} />
          <Route path="salespeople/create" element={<SalespersonForm />} />
          <Route path="customers" element={<CustomerList />} />
          <Route path="customers/create" element={<CustomerForm />} />
          <Route path="sales" element={<SalesList />} />
          <Route path="sales/create" element={<SalesForm />} />
          <Route path="sales/history" element={<SalespersonHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
