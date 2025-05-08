import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({ producto }) => {
  const { addToCart, counter } = useContext(CartContext)

  const handleAdd = () => {
    addToCart({ ...producto, counter })
  }

  return (
    <div>
      <Card className='entire_card'>
        <Card.Img variant="top" src={producto.image} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text className="text-center">{producto.descripcion}</Card.Text>
          <h6>Stock: {producto.stock}</h6>
          <h6>Precio: ${producto.precio}</h6>
          <ItemCount handleOnAdd={handleAdd} />
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetail