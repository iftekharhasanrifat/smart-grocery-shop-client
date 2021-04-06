import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to='/home'><h5><FontAwesomeIcon icon={faStore} /> Smart Grocery Shop</h5></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link style={{ marginLeft: '20px', textDecoration: 'none' }} to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link style={{ marginLeft: '20px', textDecoration: 'none' }} to="/orders">Orders</Link>
          </li>
          <li className="nav-item">
            <Link style={{ marginLeft: '20px', textDecoration: 'none' }} to="/admin">Admin</Link>
          </li>
          <li className="nav-item">
            <Link style={{ marginLeft: '20px', textDecoration: 'none' }} to="/deals">Deals</Link>
          </li>
          <li className="nav-item">
            {
              loggedInUser.name ? <h5 style={{ marginLeft: '20px' }}>{loggedInUser.name}</h5> : <Link style={{ marginLeft: '20px', textDecoration: 'none' }} to="/login">Login</Link>
            }
          </li>
        </ul>
        <div style={{ marginLeft: '20px' }} className='form-inline'>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Home;