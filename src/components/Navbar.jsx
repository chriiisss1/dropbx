import React from 'react'

import './Navbar.css'

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <nav className='nav'>
        <ul className='nav-menu'>
          <li className='nav-item'><Link to="/" className='nav-link'>Home</Link></li>
          <li className='nav-item'><Link to="/productos" className='nav-link'>Productos</Link></li>
          <li className='nav-item'><Link to="/soluciones" className='nav-link'>Soluciones</Link></li>
          <li className='nav-item'><Link to="/precios" className='nav-link'>Precios</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar