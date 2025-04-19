import { useParams } from 'react-router-dom';
import { products } from "../../../productsMock";
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const productoEncontrado = products.find((p) => p.id === parseInt(id));
      setProduct(productoEncontrado || null);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <div>Cargando producto</div>;

  return (
    <div>
      <ItemDetail producto={product} />;
    </div>
  ) 
};

export default ItemDetailContainer;