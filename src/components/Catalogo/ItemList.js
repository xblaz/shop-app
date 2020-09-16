import React from 'react';
import Item from './Item';

const ItemList = ({productos}) => {
    const contenido = productos.map((unProducto) =>
            <Item key={unProducto.id} id={unProducto.id} titulo={unProducto.titulo} descripcion={unProducto.descripcion} precio={unProducto.precio} />
        );
        return (
            <>
                {contenido}
            </>
        );
}
export default ItemList;