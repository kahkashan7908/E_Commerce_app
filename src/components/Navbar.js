import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__brand">
        <img src='https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png' height={50} width={50} style={{borderRadius:'50%'}} alt='None'/>
      </Link>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <Link to="/login">Login</Link>
        </li>
        <li className="navbar__item">
          <Link to="/register">Register</Link>
        </li>
        <li className="navbar__item">
          <Link to="/cart"><span className="material-symbols-outlined">shopping_cart</span></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
