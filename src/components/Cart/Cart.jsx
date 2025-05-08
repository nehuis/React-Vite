import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../Context/CartContext'
import '../Cart/Cart.css'
import ContactForm from '../ContactForm/ContactForm'
import { Link } from 'react-router-dom'
import { Card } from 'antd';

const Cart = () => {

  const { cart, cleanCart, removeFromCart } = useContext(CartContext)

  const total = cart.reduce((acc, prod) => acc + prod.precio * prod.counter, 0)

  return (
    <div>
      {cart.map((p) => (
        <div key={p.id} className='entire-card'>
          <Card variant="borderless" className='card-body' style={{ width: 300 }}>
            <img src= {p.image} alt="" className='foto'/>
            <h3>{p.nombre}</h3>
            <p className='cantidad'>Cantidad: {p.counter}</p>
            <p className='price'>Precio unitario: ${p.precio}</p>
            <Button className='remove' variant="outline-danger" size="sm" onClick={() => removeFromCart(p.id)}>
              Eliminar
            </Button>
          </Card>
        </div>
      ))}
      {cart.length > 0 ? 
      <>
        <div className='summary'>
        <h3>Total de la compra: ${total}</h3>
        <Button className='empty-cart' onClick={cleanCart}>Vaciar carrito</Button>
        </div>
      {<ContactForm />}
      </> : 
      <div className='empty'>
      <h2>Carrito vacío</h2>
      <Button as={Link} to={"/"} className='btn-back'>Volver al catálogo</Button>
      </div>
      }
    </div>
  )
}
export default Cart