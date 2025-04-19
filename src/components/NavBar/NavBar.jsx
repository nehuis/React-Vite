    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import NavDropdown from 'react-bootstrap/NavDropdown';
    import CartWidget from '../CartWidget/CartWidget';
    import { Link } from 'react-router-dom';
    import '../NavBar/NavBar.css'

    function NavBar() {

        return (
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand>
                            <Link to={"/"}>
                            <img src="../src/assets/logo.png" alt="logo" className='logo'/>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/categoria/Mancuernas" className='categories'>Mancuernas</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/categoria/Barras" className='categories'>Barras</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/categoria/Discos" className='categories'>Discos</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <Link to={"/cart"}>
                            <CartWidget />
                        </Link>
                    </Container>
                </Navbar>
            </div>
        )
    }

    export default NavBar