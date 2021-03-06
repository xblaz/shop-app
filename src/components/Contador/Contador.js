import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap'; 

export default function Contador (props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text></Card.Text>
                <ButtonGroup>
                    <Button variant="primary" onClick={props.decrementa}>-</Button>
                    <input type="text" value={props.contador} className="text-center" readOnly onChange={props.onChange}/>
                    <Button variant="primary" onClick={props.incrementa}>+</Button>
                </ButtonGroup>
                    <Button variant="primary mt-2 btn-block">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    );

}