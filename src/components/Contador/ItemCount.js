import React, { useState, useEffect } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';

const ItemCount = props => {

    const [contador, setContador] = useState(0);

    useEffect(() => {
        if (props.initial) {
            console.log('inicializando contador...');
            setContador(parseInt(props.initial));
        }
    }, [props.initial]);

    const incrementa = () => {
        if (contador < props.max) {
            setContador(contador + 1)
        }
    }
    const decrementa = () => {
        if (contador > props.min) {
            setContador(contador - 1)
        }
    }
    const onUp = ()  => {
        if (props.onAdd) {
            console.log('ejecutando callback... ')
            props.onAdd(contador);
        }
    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text>Producto descripcion</Card.Text>
                <ButtonGroup>
                    <Button variant="primary" onClick={decrementa}>-</Button>
                    <input type="text" value={contador} className="text-center" readOnly />
                    <Button variant="primary" onClick={incrementa}>+</Button>
                </ButtonGroup>
                <Button variant="primary mt-2 btn-block" onClick={onUp}>Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    );

}

export default ItemCount;