import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Item/Item.css'
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant="top"  src={producto.image} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Link to={`/item/${producto.id}`}>
                    <Button className='btn'>Detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item