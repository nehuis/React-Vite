import { useContext, useRef, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { createOrder } from "../Services/OrderServices"
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom"
import '../ContactForm/ContactForm.css'

const ContactForm = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const toast = useRef(null)
    const {cart, cleanCart, totalPrice} = useContext(CartContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (nombre === "" || apellido === "" || email === "") {
            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Complete todo los campos',
                life: 2000
            });
            return
        }

        try {
            const orderData = {
                buyer: {
                    name: nombre,
                    lastname: apellido,
                    email: email
                },
                items: cart.map(item => ({
                    id: item.id,
                    title: item.nombre,
                    price: item.precio
                })),
                total: totalPrice()
            }

            const orderId = await createOrder(orderData)

            toast.current.show({
                severity: 'success',
                summary: 'Orden creada',
                detail: `Orden creada con éxito. ID: ${orderId}`,
                life: 2000
            })

            setTimeout(() => {
                cleanCart();
                navigate('/');
            }, 3500);

        } catch (error) {
            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Error al crear la orden',
                life: 2000
            })
        }
    }

    return (
        <div className="form_container">
            <Toast ref={toast} />
            <form onSubmit={handleSubmit}>

                <div className="form_group">
                    <input 
                        className="input"
                        type="text" 
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} 
                    />
                </div>   

                <div className="form_group">
                    <input
                        className="input"
                        type="text" 
                        placeholder="Apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)} 
                    />
                </div>

                <div className="form_group">
                    <input 
                        className="input"
                        type="text" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <button type="submit" className="boton">Enviar</button>
            </form>
        </div>
    )
}

export default ContactForm