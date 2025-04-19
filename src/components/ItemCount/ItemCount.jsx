import React, { useState } from 'react'

const ItemCount = () => {
const [counter, setCounter] = useState(0)

  return (
    <div>
        <button onClick={() => {setCounter(counter + 1)}}>Agregar</button>
        <p>Cantidad: {counter}</p>
        <button onClick={() => {setCounter(counter - 1)}}>Quitar</button>
        <button type="submit">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount