import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NavPrincipal.css';
import CartIcon from './CartIcon';

class NavPrincipal extends React.Component {
  render() {
    return (
      <Navbar bg="primary" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#catalogo">Catálogo</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartIcon className="ml-1"/>
      </Navbar>
    )
  }
}
export default NavPrincipal;