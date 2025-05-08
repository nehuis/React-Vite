import { createContext } from "react"
import { useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [counter, setCounter] = useState(0)

  const quantityInCart = () => {
    return cart.reduce((total, product) => total + product.counter, 0)
  }

  const addToCart = (product) => {
    const currentTotal = quantityInCart()
    const wouldExceedLimit = currentTotal + product.counter > product.stock

    if (wouldExceedLimit) {
      return false
    }

    setCart((currentCart) => {
      const existingItem = currentCart.find(item => item.id === product.id)

      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id
          ? {...item, counter: item.counter + product.counter}
          : item
        )
      }

      return [...currentCart, {...product}]
    })
    return true
  }

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, counter) => {
    setCart((currentCart) => (
      currentCart.map(item =>
        item.id === productId
        ? {...item, counter: Math.max(0, counter)}
        : item
      )
    ))
  }

  const cleanCart = () => {
    setCart([])
  }

  const sumarProductos = () => {
    if (counter < 10) {
      setCounter(counter + 1)
    }
  }

  const restarProductos = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.precio * prod.counter, 0);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, sumarProductos, restarProductos, counter, setCounter, addToCart, updateQuantity, removeFromCart, cleanCart, quantityInCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}
