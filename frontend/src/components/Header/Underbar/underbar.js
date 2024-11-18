import React from 'react';
import '../Underbar/underbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Underbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="p-3">
            <Container fluid className="justify-content-center">
                <Nav className="align-items-center">
                    <Link to="/sole" className="nav-link">Occhiali Da Sole</Link>
                    <span className="vertical-divider"></span>
                    <Link to="/vista" className="nav-link">Occhiali Da Vista</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Underbar;
