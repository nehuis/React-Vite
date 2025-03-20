import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({saludo}) => {

    return (
        <div>
            <h1 className="greeting">{saludo}</h1>
        </div>
    )
}

export default ItemListContainer