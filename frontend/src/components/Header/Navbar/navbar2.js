import React from 'react';
import '../Navbar/navbar2.css';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
      <>
 <Navbar bg="light" expand="lg" className="p-3">
        <Container fluid>
          {/* Left Side: Currency and Language Menus Fixed to Bottom Left */}
          <Nav className="position-absolute start-0">
            <NavDropdown title="Currency" id="currency-dropdown">
              <NavDropdown.Item href="#EU">EU</NavDropdown.Item>
              <NavDropdown.Item href="#US">US</NavDropdown.Item>
              </NavDropdown>
              <span className="vertical-divider mx-1"></span> {/* Vertical Divider */}
 
            <NavDropdown title="Language" id="language-dropdown" className="ms-2">
              <NavDropdown.Item href="#IT">IT</NavDropdown.Item>
              <NavDropdown.Item href="#ENG">ENG</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Right Side: Buttons with Divider */}
          <Nav className="ms-auto align-items-center justify-content-end">
            <Button variant="link" className="me-3 custom-button text-dark text-decoration-none">
              Spedizioni gratuite in Italia e Unione Europea a partire da 50€
            </Button>
            <span className="vertical-divider"></span>

            <Button variant="link" className="me-3 custom-button">
            <Link to="/login" className="nav-link" > Accedi </Link>
            </Button>
            <span className="vertical-divider"></span>

            <Button variant="link" className="me-3 custom-button">
            <Link to="/login" className="nav-link" > Registrati </Link>
            </Button>
            <span className="vertical-divider"></span>

            <Button variant="link" className="me-3 custom-button">
              Contatti 10:00-12:00 / 13:30-17:30
            </Button>
            <span className="vertical-divider"></span>

            <Button variant="link" className="me-3 custom-button">
              Blog
            </Button>
          </Nav>
        </Container>
      </Navbar>
            </>
  );
}

export default Navigation;
