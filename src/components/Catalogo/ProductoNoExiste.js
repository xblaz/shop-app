import React from 'react';
import { useHistory } from "react-router-dom";
import { Container } from 'react-bootstrap';
const ProductoNoExiste = () => {

    const history = useHistory();

    const volverAtras = () => {
        history.goBack()
    };

    return (
        <>
        <Container>
            <div className="py-5 text-center">
                <h1 className="text-center">Producto no existe</h1>
                <button onClick={volverAtras}>Volver atras</button>
            </div>
        </Container>
        </>
    );
}
export default ProductoNoExiste;