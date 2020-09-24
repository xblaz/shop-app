import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItemCount from '../../containers/Contador/ItemCount'

const ItemDetail = (props) => {

    console.log(props.data.titulo)
    return (
        <>
        <Container>
            <div className="py-5 text-center">
                <h1 className="text-center">{props.data.titulo}</h1>
                <img src={props.data.img} className="rounded mx-auto d-block" alt={props.data.titulo}/>
            </div>
            
        <Row>
            <Col>
                    <h3>{props.data.descripcion}</h3>
            </Col>
            <ItemCount initial="0" min="1"  max="10" />
        </Row>



        </Container>
        
           
        </>
    )
}
export default ItemDetail;