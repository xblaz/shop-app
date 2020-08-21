import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NavPrincipal.css';
import CartIcon from './CartIcon';

class NavPrincipal extends React.Component {
  render() {
    return (
      <Navbar bg="primary" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">E-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#catalogo">Catálogo</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <Button variant="outline-light">Buscar producto</Button>
          </Form>
        </Navbar.Collapse>
        <CartIcon className="ml-1"/>
      </Navbar>
    )
  }
}
export default NavPrincipal;