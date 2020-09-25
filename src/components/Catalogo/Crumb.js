import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
const Crumb = ({item}) => {
    return (
        <Breadcrumb>
        <Breadcrumb.Item  href="/">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item active>{item.data.titulo}</Breadcrumb.Item>
        </Breadcrumb>
    )
}
export default Crumb;