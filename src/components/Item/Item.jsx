import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Item/Item.css'
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>${producto.precio}</Card.Text>
                    <Link to={`/item/${producto.id}`}>
                    <Button variant="primary" className='btn'>Detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item