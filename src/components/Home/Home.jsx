import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import ItemList from '../Catalogo/ItemList'

const Home = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="px-5 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                        <h1 className="display-4">{props.greeting}</h1>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="mx-auto align-center">
                    <ItemList productos={props.productos}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;