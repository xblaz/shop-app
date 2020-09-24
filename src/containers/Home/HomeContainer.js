import React, {useState, useEffect } from 'react';
import Home from '../../components/Home/Home'
import datasource from '../../data/datos.json';

const HomeContainer = (props) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getDataPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(datasource);
            }, 2000);
        });
        getDataPromise.then((d) => {
            setProductos(d);
            setLoading(true);
        });
    }, [])

    useEffect(() => {
       console.log(productos);
    }, [productos])

    return (
        <>
        <Home productos={productos} greeting={props.greeting}/>
        </>
    )
}
export default HomeContainer;