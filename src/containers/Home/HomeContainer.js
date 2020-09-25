import React, {useState, useEffect } from 'react';
import Home from '../../components/Home/Home'
import Loading from '../../components/Catalogo/Loading'

const HomeContainer = (props) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getDataPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(props.data);
            }, 2000);
        });
        getDataPromise.then((d) => {
            setLoading(false);
            setProductos(d);
        });
    }, [props.data])

    useEffect(() => {
       console.log(productos);
    }, [productos])

    return (
        <>
            {loading ? <Loading/> : <Home productos={productos} greeting={props.greeting}/>}
        </>
    )
}
export default HomeContainer;