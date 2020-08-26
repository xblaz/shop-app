import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import Contador from '../Contador/Contador'

const Home = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="px-5 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                        <h1 className="display-4">{props.greeting}</h1>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti exercitationem architecto, accusantium cupiditate laboriosam iste rerum voluptate reprehenderit incidunt! Iste alias quaerat, sit consectetur accusantium eaque cumque aperiam asperiores corrupti.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="mx-auto text-center">
                    <Contador />
                </Col>
            </Row>
        </Container>
    )
}
export default Home;