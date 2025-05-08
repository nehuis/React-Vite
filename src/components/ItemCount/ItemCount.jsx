import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import '../ItemCount/ItemCount.css'

const ItemCount = ({ handleOnAdd }) => {
  const { counter, sumarProductos, restarProductos } = useContext(CartContext)

  return (
    <div className="buttons-container">
      <button onClick={restarProductos} className="counter-btn restar">-</button>
      <button onClick={handleOnAdd} className="counter-btn agregar">Agregar al carrito: {counter} producto/s</button>
      <button onClick={sumarProductos} className="counter-btn sumar">+</button>
    </div>
  )
}

export default ItemCount