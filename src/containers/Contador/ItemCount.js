import React, { useState, useEffect } from 'react';
import Contador from '../../components/Contador/Contador';

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
            <Contador  decrementa={decrementa} incrementa={incrementa} onUp={onUp} contador={contador} />
        </div>
    );

}

export default ItemCount;