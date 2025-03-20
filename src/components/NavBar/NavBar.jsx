import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css'

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <img src="../src/assets/logo.png" alt="logo" className='logo'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='link'>Catálogo</Nav.Link>
                            <Nav.Link className='link'>Nosotros</Nav.Link>
                            <NavDropdown title="Categorías" id="basic-nav-dropdown">
                                <NavDropdown.Item className='categories'>Mancuernas</NavDropdown.Item>
                                <NavDropdown.Item className='categories'>Barras</NavDropdown.Item>
                                <NavDropdown.Item className='categories'>Discos</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar