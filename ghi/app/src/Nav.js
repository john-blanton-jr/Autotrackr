import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/salespeople">Salespeople</NavLink>
            </li>
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/salespeople/create">Add a Salesperson</NavLink>
            </li>
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/customers">Customers</NavLink>
            </li>
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/customers/create">Add a Customer</NavLink>
            </li>
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/sales">Sales</NavLink>
            </li>
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/sales/create">Add a Sale</NavLink>
            </li>
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/sales/history">Salesperson History</NavLink>
            </li>
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/appointments">Appointments</NavLink>
            </li>
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/appointments/new">New Appointment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/service_history">Service History</NavLink>
            </li>
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/technicians">Technicians</NavLink>
            </li>
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/technicians/new">Add a Technician</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
