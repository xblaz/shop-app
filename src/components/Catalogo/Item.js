import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Item = props => {
    return (
        <>
            <Card style={{ width: '18rem' }} className="float-left mx-2 mb-2">
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>
                        <NavLink to={`/item/${props.id}`}>
                            {props.titulo}
                        </NavLink>
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