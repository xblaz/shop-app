import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
const Crumb = (props) => {
    return (
        <Breadcrumb>
        <Breadcrumb.Item><Link to="/">Inicio</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>{props.pagina}</Breadcrumb.Item>
        </Breadcrumb>
    )
}
export default Crumb;