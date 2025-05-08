import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../Services/ProductServices'; 
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts(categoryId)
        .then((res) => {
            setProductos(res);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error al cargar los productos:", error);
            setLoading(false);
        });
    }, [categoryId]);

    return (
        <div>
            {loading ? <Loader /> : <ItemList productos={productos} />}
        </div>
    );
};  

export default ItemListContainer;
