import {Link} from "react-router-dom"

function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
        </li>
     
        <li className="nav-item">
            <Link className="nav-link" to='/services'> Services</Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" to="/single"></Link>
        </li>
      
    </ul>  
        </nav>
    </div>
  )
}

export default NavBar