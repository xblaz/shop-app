import React from 'react';
import { Card } from 'react-bootstrap';

const Item = props => {
    return (
        <>
            <Card style={{ width: '18rem' }} className="float-left mx-2 mb-2">
                <Card.Body>
                    <Card.Title>
                        {props.titulo}
                    </Card.Title>
                    <Card.Text>
                        {props.descripcion}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>Precio: {props.precio}</Card.Footer>
            </Card>
        </>
    )
}
export default Item;