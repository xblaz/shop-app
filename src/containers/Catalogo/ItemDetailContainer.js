import React , {useEffect, useState} from 'react';
import ItemDetail from '../../components/Catalogo/ItemDetail';
import Loading from '../../components/Catalogo/Loading'
import ProductoNoExiste from '../../components/Catalogo/ProductoNoExiste'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = (props) => {

    const [productos, setProductos] = useState([]);
    const [producto, setProducto] = useState();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    

    useEffect(() => {
        const getDataPromise = new Promise((resolve) => {
            setTimeout(() => {
                return resolve(props.data);
            }, 2000);
        });

        getDataPromise.then((d) => {
            setLoading(false);
            setProductos(d);
        });
    }, [props.data])

    useEffect(() => {

        if (productos && productos.length > 0) {
            const unItem = productos.find(el => el.id === id);
            setProducto(unItem);
        }
    }, [productos,id])

  

    return (
        <>{loading ? <Loading/> : producto ? <ItemDetail data={producto}/> : <ProductoNoExiste/> }</>
    )    
}
export default ItemDetailContainer;