import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/stylingComponent.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navbarsection = () => {
  return (
    <div className='stylingComponent'>
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Rayhans Najib Al-Farouq</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#profil">Profil</Nav.Link>
            <Nav.Link href="#bio">Biografi</Nav.Link>
            <Nav.Link href="#learning">Learning</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    </div>
  )
}

export default Navbarsection;