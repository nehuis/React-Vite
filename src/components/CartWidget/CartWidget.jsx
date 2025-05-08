import { ShoppingCartOutlined } from "@ant-design/icons"
import '../CartWidget/CartWidget.css'
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const CartWidget = () => {

    const { quantityInCart } = useContext(CartContext)

    return (
        <div className="cart-widget">
            <ShoppingCartOutlined className="widget"/>
            <span className="numerito"> {quantityInCart()} </span>
        </div>
    )
}

export default CartWidget