import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoSearch } from "react-icons/io5";

export const NavBar = () => {
  return (
    <div>
      <Navbar className='custom-navbar' expand="md">
        <Container fluid="md" >
          <Navbar.Brand className='elijah' href="#home">
            Anime
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav className="mx-auto"> {/* Ajoutez la classe mx-auto ici */}
                <Nav.Link className='first' href="#link">PORTFOLIO</Nav.Link>
                <Nav.Link href="#link">ABOUT</Nav.Link>
                <Nav.Link href="#link">CONTACT</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
                <Nav.Link href="#link">Search</Nav.Link>
                <Nav.Link href="#link"><IoSearch/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
