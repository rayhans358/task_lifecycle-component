import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/StyleLifecycle.css';
import { Container, Nav, Navbar } from "react-bootstrap";

export default class NavSec extends React.Component {
  render() {
    return (
      <div className='StyleLifecycle'>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Technology News</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
  }
}
