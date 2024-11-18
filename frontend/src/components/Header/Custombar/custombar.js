import { useState } from 'react';
import "../Custombar/custombar.css";
import { Navbar, Nav, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';

import { useProductContext } from "../../../context/ProductContext";
import { useNavigate, useSearchParams } from 'react-router-dom';

const Custombar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/sole?query=' + query);
  };

  return (
    <Navbar bg="white" expand="lg" className="custom-navbar">
      <div className="logo">
        <Navbar.Brand href="/">
          <img src="//www.otticasm.com/skin/frontend/smartwave/porto_child/images/logo-ottica-sm.png" alt="Logo" className="logo-image" />
        </Navbar.Brand>
      </div>
      <Form className="search-container" onSubmit={handleSearch}>
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
      </Form>
      <div className="icon-container">
        <Nav>
          <Nav.Link href="#wishlist" className="icon-button">❤️</Nav.Link>
          <Nav.Link href="#cart" className="icon-button">🛒</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Custombar;
