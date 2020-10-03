import React, {useContext} from 'react';
import { Container } from 'react-bootstrap';
import Crumb from '../Catalogo/Crumb'
import { CartContext } from '../../context/CartContext';
const Cart = () => {

    const [cart] = useContext(CartContext);

    return (
        <>
        <Crumb pagina="Contenido del carrito"/>
        <Container>
        <div className="py-5 text-center">
                <h1 className="text-center">Carrito</h1>
                <span>Items en carrito: {cart.length}</span>
        </div>
        </Container>
        </>
    )

} 
export default Cart;