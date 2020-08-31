import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

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
        <div className="card text-center w-25">
            <div className="card-body">
                <p className="card-title">Producto descripcion</p>
                <ButtonGroup>
                    <Button variant="primary" onClick={decrementa}>-</Button>
                    <input type="text" value={contador} className="text-center" readOnly />
                    <Button variant="primary" onClick={incrementa}>+</Button>
                </ButtonGroup>
                <div>
                    <Button variant="primary mt-2 btn-block" onClick={onUp}>Agregar al carrito</Button>
                </div>
            </div>
        </div>
    );

}

export default ItemCount;