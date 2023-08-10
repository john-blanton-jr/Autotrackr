// import { NavLink } from 'react-router-dom';
import Logo from "./assets/autotrackr.png"


function TopNav() {
    return (
        <nav className="navbar bg-black d-flex border-bottom border-danger border-5 shadow min-vw-100">
            <div className="container-fluid ms-5">
                <a className="navbar-brand fs-1 text-white" href="/"><img src={Logo} class="img-fluid d-inline-block align-text-top"  width="300" alt="logo" /></a>
            </div>
        </nav>
    )
}

export default TopNav;