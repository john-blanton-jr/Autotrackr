import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg border-end border-2 bg-dark d-none d-md-block p-3">
      <div className="container-fluid">
        {/* <NavLink className="navbar-brand" to="/">CarCar</NavLink> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex flex-column min-vh-100 text-nowrap pt-3" >
            <h2 className='border-bottom border-2 border-danger text-warning'>Sales</h2>
            <li className="nav-item lh-sm ms-3 ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/sales">Sales</NavLink>
            </li>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/salespeople">Salespeople</NavLink>
            </li>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/customers">Customers</NavLink>
            </li>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/sales/create">Add a Sale</NavLink>
            </li>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/salespeople/create">Add a Salesperson</NavLink>
            </li>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/customers/create">Add a Customer</NavLink>
            </li>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/sales/history">Salesperson History</NavLink>
            </li>
            <h2 className='border-bottom border-2 text-warning border-danger'>Service</h2>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/appointments">Appointments</NavLink>
            </li>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/technicians">Technicians</NavLink>
            </li>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/appointments/new">New Appointment</NavLink>
            </li>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/service_history">Service History</NavLink>
            </li>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/technicians/new">Add a Technician</NavLink>
            </li>
            <h2 className='border-bottom border-2 text-warning border-danger'>Autos</h2>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/manufacturers">Manufacturers</NavLink>
            </li>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/manufacturers/new">Add a Manufacturer</NavLink>
            </li>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/models">Models</NavLink>
            </li>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/models/create">Create a Model</NavLink>
            </li>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/automobiles/create">Create an Automobile</NavLink>
            </li>
            <li className="nav-item lh-sm ms-3">
              <NavLink className="nav-link text-white" aria-current="page" to="/automobiles">Automobiles</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
