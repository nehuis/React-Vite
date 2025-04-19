import Item from '../Item/Item'
import '../ItemList/ItemList.css'

const ItemList = ({ productos }) => {

  return (
    <div className='card_body'>
      {
        productos.map((product) => {
          return (
            <Item key={product.id} producto = {product} />
          )
        })
      }
    </div>
  )
}

export default ItemList