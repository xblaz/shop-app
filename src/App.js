import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavPrincipal from './components/Nav/NavPrincipal'
import HomeContainer from './containers/Home/HomeContainer'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './containers/Catalogo/ItemDetailContainer';
import datasource from '../src/data/datos.json'
import Cart from './components/Catalogo/Cart'

function App() {
  
  return (
    <div className="d-flex flex-column h-100">
      <BrowserRouter>
      <NavPrincipal />
      <Switch>
        <Route exact path="/"> 
          <HomeContainer data={datasource} greeting='Compras en linea'/>
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer data={datasource}/>
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;