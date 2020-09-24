import React , {useEffect, useState} from 'react';
import ItemDetail from '../../components/Catalogo/ItemDetail';
import Loading from '../../components/Catalogo/Loading'

const ItemDetailContainer = (props) => {

    const [productos, setProductos] = useState([]);
    const [unProducto, setUnProducto] = useState();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const getDataPromise = new Promise((resolve) => {
            setTimeout(() => {
                return resolve(props.data);
            }, 2000);
        });

        getDataPromise.then((d) => {
            setLoading(true);
            setProductos(d);
        });
    }, [props.data])

    useEffect(() => {
        const unItemAleatorio = productos.find((_, i, ar) => Math.random() < 1 / (ar.length - i));
        setUnProducto(unItemAleatorio);
     }, [productos])

     if (!loading) {
         return ( <Loading/> )
     } else {
        if (unProducto) {
            return ( 
                <ItemDetail data={unProducto}/>
            )
        } else {
            return ( <>Producto no encontrado</>)
        }
        
     }
}
export default ItemDetailContainer;