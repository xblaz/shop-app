import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
const Crumb = (props) => {

    console.log(props.pagina);
    return (
        <Breadcrumb>
        <Breadcrumb.Item  href="/">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item active>{props.pagina}</Breadcrumb.Item>
        </Breadcrumb>
    )
}
export default Crumb;