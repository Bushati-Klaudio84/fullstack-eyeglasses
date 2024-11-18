import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import { useProductContext } from "../../context/ProductContext";
import Navigation from '../Header/Navbar/navbar2';
import Custombar from '../Header/Custombar/custombar';
import Footer from '../Footer/footer';
import GradientBar from '../Body/Bar/bar';
import Underbar from '../Header/Underbar/underbar';
import { useSearchParams } from 'react-router-dom';



const Vista = () => {
  const { products } = useProductContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;  // Display 9 items per page (3 rows with 3 cards each)
  const [searchParams] = useSearchParams();

  console.log(searchParams.get('query'));

  // Filter products by category name "Dielli"
  const filteredProducts = products.filter((product) => product.category.name === "Optike");

  // Calculate total number of pages based on filtered products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Get current items for pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Include the header/navigation components at the top */}
      <Navigation />
      <Custombar />
      <Underbar />
      <GradientBar />

      {/* Main content for filtered products */}
      <Container className="mt-5">
        {/* First Row with Filtered Products */}
        <Row>
          {currentItems.map((product, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="card-zoom">
                <Card.Img variant="top" src={`http://localhost:3000/api/product/uploads/${product.image}`} />
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

        {/* Pagination */}
        <Row>
          <Col className="d-flex justify-content-center">
            <Pagination>
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </Col>
        </Row>
      </Container>

      {/* Footer component at the bottom */}
      <Footer />
    </div>
  );
};

export default Vista;
