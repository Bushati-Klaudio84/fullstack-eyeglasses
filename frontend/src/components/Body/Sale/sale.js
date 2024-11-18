import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useProductContext } from "../../../context/ProductContext";
import './sale.css'; // Custom CSS for additional styling

const Sale = () => {
  const { products } = useProductContext();

  // Here, we will create 3 rows of products
  const rowProducts = [
    products.slice(0, 3),  // First 3 products
    products.slice(3, 6),  // Next 3 products
    products.slice(6, 9),  // Next 3 products
  ];

  return (
    <Container className="mt-5">
      {/* Create 3 rows with grey background */}
      {rowProducts.map((row, index) => (
        <Row key={index} className="mb-4" style={{ backgroundColor: "#f5f5f5" }}>
          {/* Logo at the beginning of each row */}
          <Col xs={2} className="d-flex align-items-center justify-content-center">
            <img
              src="data:image/png;base64,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" // Placeholder logo image
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>

          {/* Display 3 smaller cards per row */}
          {row.map((product, idx) => (
            <Col md={3} key={idx} className="mb-4"> {/* Change from md={4} to md={3} for smaller cards */}
              <Card className="card-zoom">
                <Card.Img
                  variant="top"
                  src={`http://localhost:3000/api/product/uploads/${product.image}`}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text className="text-primary">
                    <strong>{product.price}</strong>
                  </Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Sale;
