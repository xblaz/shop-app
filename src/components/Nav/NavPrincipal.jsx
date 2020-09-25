import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NavPrincipal.css';
import logo from '../../logo.svg';
import CartIcon from './CartIcon';

class NavPrincipal extends React.Component {
  render() {
    return (
      <Navbar bg="primary" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">
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
            <Nav.Link href="/">Inicio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartIcon className="ml-1"/>
      </Navbar>
    )
  }
}
export default NavPrincipal;