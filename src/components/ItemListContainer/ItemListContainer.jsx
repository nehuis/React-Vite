import '../ItemListContainer/ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { products } from "../../../productsMock"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const tarea = new Promise((resolve, reject) => {
            setTimeout(() => {
                const error = false 

                if (error) {
                    reject("Hubo un error al cargar los productos.")
                } else {
                    resolve(products)
                }
            }, 500)
        })

        tarea
            .then((resp) => {
                if (categoryId) {
                    const productosFiltrados = resp.filter(prod => prod.categoria === categoryId)
                    setProductos(productosFiltrados)
                } else {
                    setProductos(resp)
                }
            })
            .catch(err => console.log(err))
    }, [categoryId])

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer
