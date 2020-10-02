import React from 'react';
import { Button } from 'react-bootstrap'; 

const BtnComprar = (props) => {
    return (
        <Button variant="primary mt-2 btn-block">Comprar {props.cantidad === 0 ? "" : props.cantidad}</Button>
    )
}
export default BtnComprar;