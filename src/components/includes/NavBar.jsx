import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function NavBar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const searchForm = (e) => {
    e.preventDefault();
    if (search !== '') {
      axios
        .get(`https://dummyjson.com/products/search?q=${search}`)
        .then((result) => {
          localStorage.setItem('Products', JSON.stringify(result.data.products));
          navigate('/search'); // Navigate to the search page programmatically
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

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
            <Link className="nav-link" to="/services">Services</Link>
          </li>
        </ul>
        <form className="d-flex" onSubmit={searchForm}>
          <input
            type="text"
            className="form-control me-2"
            name="searchproduct"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default NavBar;
