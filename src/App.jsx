import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

  let greeting = "Bienvenido a mi ecommerce"

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer saludo = {greeting} />
    </>
  )
}

export default App
