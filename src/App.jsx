import React from 'react'

import './App.css'

import Navbar from './components/Navbar'

import Landing from './pages/Landing';
import Precios from './pages/Precios';
import Productos from './pages/Productos';
import Soluciones from './pages/Soluciones';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/soluciones" element={<Soluciones />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App