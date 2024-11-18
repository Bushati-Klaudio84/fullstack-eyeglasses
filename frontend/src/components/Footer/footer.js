import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Social media icons

const Footer = () => {
  return (
    <footer className="text-white py-4" style={{ backgroundColor: "#222" }}>
      <Row className="align-items-center">
        {/* First Column: Logo and Rights */}
        <Col md={4} className="text-center text-md-left">
          <img
            src="https://www.otticasm.com/skin/frontend/smartwave/porto_child/images/logo-ottica-sm-black.png"
            alt="Company Logo"
            className="logo-footer"
            style={{ width: "200px", marginBottom: "10px" }}  // Increased logo size
          />
          <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </Col>

        {/* Second Column: About Us and Contact Information */}
        <Col md={4} className="text-center text-md-left">
          <h6 className="font-weight-bold">About Us</h6>
          <p>
            We provide quality eyewear and services. Explore our wide range of eyewear products and find the perfect fit for you.
          </p>
          <h6 className="font-weight-bold">Contact Information</h6>
          <ul className="list-unstyled mb-0">
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@yourcompany.com</li>
            <li>Address: 123 Vision Ave, Optic City</li>
          </ul>
        </Col>

        {/* Third Column: Follow Us */}
        <Col md={4} className="text-center text-md-left">
          <h6 className="font-weight-bold">Follow Us</h6>
          <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li>
              <a href="https://facebook.com" className="text-white mx-2" style={{ fontSize: "20px" }}>
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="text-white mx-2" style={{ fontSize: "20px" }}>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="text-white mx-2" style={{ fontSize: "20px" }}>
                <FaInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      {/* Footer bottom info section */}
      <Row className="mt-4">
        <Col md={12} className="text-center">
          <div className="footer-bottom" style={{ backgroundColor: "#1a1a1a", padding: "15px 0", fontSize: "0.75rem" }}>
            <p className="mb-2">Siamo rivenditori certificati dei più importanti produttori di occhiali: Luxottica, Safilo, Marchon, Kering, De Rigo, Marcolin</p>
            <p className="mb-2">BRT, BRT Fermopoint, DPD, SDA, FedEx</p>
            <p className="mb-2">MC di Canti Massimo - Via Salita alla Rocca, 21 - 47890 Città centro storico - San Marino - COE SM18409</p>
            <p className="mb-2">Autorizzazione per attività di e-commerce nr. 579 del 20/09/2018</p>
            <p className="mb-2">Licenza nr: 315 rilasciata da Ufficio attività economiche - Dipartimento Economia – Repubblica di San Marino</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/privacy" className="text-white" style={{ fontSize: "0.85rem" }}>Informativa privacy</a>
              </li>
              <li className="list-inline-item">
                <a href="/cookie-policy" className="text-white" style={{ fontSize: "0.85rem" }}>Informativa cookie</a>
              </li>
              <li className="list-inline-item">
                <a href="/cookie-preferences" className="text-white" style={{ fontSize: "0.85rem" }}>Aggiorna le preferenze sui cookie</a>
              </li>
              <li className="list-inline-item">
                <a href="/ecommerce-creation" className="text-white" style={{ fontSize: "0.85rem" }}>Realizzazione e-commerce San Marino</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
