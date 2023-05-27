import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/StylingLifecycle.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

// Another method without class component
const NavbarSection = () => {
  return (
    <div className='StylingComponent'>
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Technology News</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Profil</Nav.Link>
                <Nav.Link href="#home">Biografi</Nav.Link>
                <Nav.Link href="#home">Learning</Nav.Link>
                <Nav.Link href="#home">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  )
}

export default NavbarSection;
