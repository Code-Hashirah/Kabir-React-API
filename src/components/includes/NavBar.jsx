import {Link} from "react-router-dom"
import {useState} from 'react'
import axios from 'axios'
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
            {/* <Link className="nav-link" to="/single"></Link> */}
        </li>
      
    </ul>
    <form className="d-flex">
           <input type="text className="className="form-control me-2" placeholder="Search"/>
          <button className="btn btn-primary" type="button">Search</button>
        </form>  
        </nav>
    </div>
  )
}

export default NavBar