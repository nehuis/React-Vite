import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../Services/ProductServices';
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((res) => {
        setProduct(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error en ItemDetailContainer:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
    {loading ? (
      <Loader />
    ) : product ? (
      <ItemDetail producto={product} />
    ) : (
      <p>Producto no encontrado</p>
    )}
  </div>

  );
};

export default ItemDetailContainer;
