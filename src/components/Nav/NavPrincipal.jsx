import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NavPrincipal.css';
import logo from '../../logo.svg';
import CartIcon from '../Nav/CartIcon'

const NavPrincipal = () => {
      return (
      
      <Navbar bg="primary" collapseOnSelect expand="lg" variant="dark">

        <Navbar.Brand>
        <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
          
          Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
          </Nav>
        </Navbar.Collapse>
        <CartIcon className="ml-1" />
      </Navbar>
    )
  
}
export default NavPrincipal;