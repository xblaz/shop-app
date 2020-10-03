import React, {useState, useEffect,  useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItemCount from '../../containers/Contador/ItemCount'
import Crumb from '../Catalogo/Crumb'
import BtnComprar from './BtnComprar';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({data}) => {
   
    const [cantidad, setCantidad] = useState(0);
    const [cart, setCart] = useContext(CartContext);

    const onAddCantidadProducto  = (val) => {
        setCantidad(val);
    }

    useEffect(() => {
        console.log(cart);
      }, [cart]);

    const addToCart = () => {
        const producto = data;
        setCart(currentCart => [...currentCart, producto])
    }

    return (
        <div>
        <Crumb pagina={data.titulo}/>
        <Container>
            <div className="py-5 text-center">
                <h1 className="text-center">{data.titulo}</h1>
                <img src={data.img} className="rounded mx-auto d-block" alt={data.titulo}/>
            </div>
        <Row>
            <Col>
                <h3>{data.descripcion}</h3>
            </Col>
            <ItemCount initial="0" min="0"  max="10" onAddProducto={onAddCantidadProducto}/>
            <BtnComprar cantidad={cantidad} onClick={addToCart}/>
        </Row>
        </Container>
        </div>
    )
}
export default ItemDetail;