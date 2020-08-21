import React from 'react';
import './App.css';
import NavPrincipal from './components/Nav/NavPrincipal'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <NavPrincipal />
      <Home greeting='Bienvenido al sitio de compras onLine'/>
      <Footer/>
    </div>
  );
}

export default App;