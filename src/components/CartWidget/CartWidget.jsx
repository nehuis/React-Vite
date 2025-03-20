import { ShoppingCartOutlined } from "@ant-design/icons"
import '../CartWidget/CartWidget.css'

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <ShoppingCartOutlined className="widget"/>
            <span className="numerito">0</span>
        </div>
    )
}

export default CartWidget