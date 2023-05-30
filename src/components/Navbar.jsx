import React from 'react'

import './Navbar.css'

import { ReactComponent as hamburger } from '../assets/hamburger-menu.svg';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <nav className='nav-wrapper'>
          <div className='logo'>
            <Link to="/" className='nav-link'>Logo</Link>
          </div>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to="/productos" className='nav-link'>Productos</Link>
            </li>
            <li className='nav-item'>
              <Link to="/soluciones" className='nav-link'>Soluciones</Link>
            </li>
            <li className='nav-item'>
              <Link to="/precios" className='nav-link'>Precios</Link>
            </li>
          </ul>
          <div className="nav-icon">
            <hamburger />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar