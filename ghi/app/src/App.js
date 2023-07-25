import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalespeopleList from './SalespeopleList'
import SalespersonForm from './SalespersonForm'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
