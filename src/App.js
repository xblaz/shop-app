import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavPrincipal from './components/Nav/NavPrincipal'
import HomeContainer from './containers/Home/HomeContainer'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './containers/Catalogo/ItemDetailContainer';
import datasource from '../src/data/datos.json'
import Cart from './components/Catalogo/Cart'
import CartProvider from './context/CartContext'

function App() {
  
  return (
    <div className="d-flex flex-column h-100">
       <CartProvider>
      <BrowserRouter>
        <NavPrincipal />
        <Route exact path="/"> 
          <HomeContainer data={datasource} greeting='Compras en linea'/>
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer data={datasource}/>
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
      <Footer/>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;