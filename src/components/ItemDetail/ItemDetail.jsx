import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card';
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({ producto }) => {
  return (
    <div className='card'>
      <Card className='entire_card'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Card.Text>{producto.precio}</Card.Text>
        <ItemCount />
      </Card.Body>
    </Card>
    </div>
  )
}

export default ItemDetail