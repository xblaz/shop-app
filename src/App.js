import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavPrincipal from './components/Nav/NavPrincipal'
//import HomeContainer from './containers/Home/HomeContainer'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './containers/Catalogo/ItemDetailContainer';
import datasource from '../src/data/datos.json'

function App() {
  
  return (
    <div className="d-flex flex-column h-100">
      <BrowserRouter>
      <NavPrincipal />
      <Switch>
        <Route exact path="/"> 
          {/*<HomeContainer greeting='Compras en linea'/>*/}
          <ItemDetailContainer data={datasource}/>
        </Route>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;