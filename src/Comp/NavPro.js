import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavPro =()=>{
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand><Link to='/'>GasFlix</Link></Navbar.Brand>
                    <Nav className="me-auto">
                            <Nav.Link className="l=nav-l"><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link className="l=nav-l"><Link to='/movies'>Movies</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavPro