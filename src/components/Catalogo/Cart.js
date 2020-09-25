import React from 'react';
import { Container } from 'react-bootstrap';
import Crumb from '../Catalogo/Crumb'
const Cart = () => {

    return (
        <>
        <Crumb pagina="Contenido del carrito"/>
        <Container>
        <div className="py-5 text-center">
                <h1 className="text-center">Carrito</h1>
        </div>
        </Container>
        </>
    )

} 
export default Cart;