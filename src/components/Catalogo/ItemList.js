import React from 'react';
import Item from './Item';

const ItemList = ({productos}) => {
        const contenido = productos.map((unProducto) =>
            <Item key={unProducto.id} id={unProducto.id} img={unProducto.img} titulo={unProducto.titulo} descripcion={unProducto.descripcion} precio={unProducto.precio} />
        );
        
        return (
            <>
                {productos.length > 0 ? contenido : "No hay productos para mostrar"}
            </>
        );
}
export default ItemList;