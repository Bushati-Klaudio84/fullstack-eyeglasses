
// import { useState } from 'react';
// import { useProductContext } from "../../context/ProductContext";
// import {
//     Navbar,
//     Nav,
//     NavDropdown,
//     Container,
//     Button,
//     Form,
//     Carousel,
//     Row,
//     Col,
//     Card
// }
// from 'react-bootstrap';
// import { FaSearch } from 'react-icons/fa';
// import './index.css';

// const Homepage = () => {
//     const { products } = useProductContext();
    
//     const [query, setQuery] = useState("");

//     const handleSearch = async (e) => {
//       e.preventDefault();
//       if (query.trim()) {
//         try {
//           const response = await fetch(`https://api.example.com/search?q=${query}`);
//           const data = await response.json();
//           console.log(data);
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       }
//     };

//     return (
//         <>
//          <Navbar bg="light" expand="lg" className="p-3">
//             <Container fluid>
//             {/* Left Side: Currency and Language Menus Fixed to Bottom Left */}
//             <Nav className="position-absolute start-0">
//                 <NavDropdown title="Currency" id="currency-dropdown">
//                 <NavDropdown.Item href="#EU">EU</NavDropdown.Item>
//                 <NavDropdown.Item href="#US">US</NavDropdown.Item>
//                 </NavDropdown>
//                 <span className="vertical-divider mx-1"></span> {/* Vertical Divider */}
    
//                 <NavDropdown title="Language" id="language-dropdown" className="ms-2">
//                 <NavDropdown.Item href="#IT">IT</NavDropdown.Item>
//                 <NavDropdown.Item href="#ENG">ENG</NavDropdown.Item>
//                 </NavDropdown>
//             </Nav>

//             {/* Right Side: Buttons with Divider */}
//             <Nav className="ms-auto align-items-center justify-content-end">
//                 <Button variant="link" className="me-3 custom-button text-dark text-decoration-none">
//                 Spedizioni gratuite in Italia e Unione Europea a partire da 50€
//                 </Button>
//                 <span className="vertical-divider"></span>

//                 <Button variant="link" className="me-3 custom-button">
//                 Accedi
//                 </Button>
//                 <span className="vertical-divider"></span>

//                 <Button variant="link" className="me-3 custom-button">
//                 Registrati
//                 </Button>
//                 <span className="vertical-divider"></span>

//                 <Button variant="link" className="me-3 custom-button">
//                 Contatti 10:00-12:00 / 13:30-17:30
//                 </Button>
//                 <span className="vertical-divider"></span>

//                 <Button variant="link" className="me-3 custom-button">
//                 Blog
//                 </Button>
//             </Nav>
//             </Container>
//         </Navbar>
//         <Navbar bg="white" expand="lg" className="custom-navbar">
//             <div className="logo">
//                 <Navbar.Brand href="#home">
//                 <img
//                     src="//www.otticasm.com/skin/frontend/smartwave/porto_child/images/logo-ottica-sm.png"
//                     alt="Logo"
//                     className="logo-image"
//                 />
//                 </Navbar.Brand>
//             </div>
//             <Form className="search-container" onSubmit={handleSearch}>
//                 <FaSearch className="search-icon" />
//                 <input
//                 type="text"
//                 placeholder="Search"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="search-input"
//                 />
//             </Form>
//             <div className="icon-container">
//                 <Nav>
//                 <Nav.Link href="#wishlist" className="icon-button">❤️</Nav.Link>
//                 <Nav.Link href="#cart" className="icon-button">🛒</Nav.Link>
//                 </Nav>
//             </div>
//         </Navbar>
//             <div className="gradient-bar">👻 Sconti da paura! terminano Domenica 3 👻</div>
//         <Container className="mt-5">
//             {/* Big Carousel */}
//             <Row className="mb-4">
//                 <Col>
//                 <h3>Main Carousel</h3>
//                 <Carousel>
//                     <Carousel.Item>
//                     <Row>
//                         <Col md={6}>
//                         <img
//                             className="d-block w-100"
//                             src="https://www.otticasm.com/media/wysiwyg/home/slider/scroll/2024/RB3025_RB3025_ST__100x50.jpg"
//                             alt="Slide 1"
//                         />
//                         </Col>
//                         <Col md={6}>
//                         <img
//                             className="d-block w-100"
//                             src="https://www.otticasm.com/media/wysiwyg/home/slider/scroll/2024/RB4433M_RB4433M__42.33x21.jpg"
//                             alt="Slide 1"
//                         />
//                         </Col>
//                     </Row>
//                     <Carousel.Caption>
//                     </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                     <Row>
//                         <Col md={6}>
//                         <img
//                             className="d-block w-100"
//                             src="https://www.otticasm.com/media/wysiwyg/home/slider/scroll/2024/RX3447V_RX3447V_ST__100x50.jpg"
//                             alt="Slide 2"
//                         />
//                         </Col>
//                         <Col md={6}>
//                         <img
//                             className="d-block w-100"
//                             src="https://www.otticasm.com/media/wysiwyg/home/slider/scroll/2024/OO9404_A__100x50-2.jpg"
//                             alt="Slide 2"
//                         />
//                         </Col>
//                     </Row>
//                     <Carousel.Caption>

//                     </Carousel.Caption>
//                     </Carousel.Item>
//                 </Carousel>
//                 </Col>
//             </Row>

//             {/* Smaller Carousels */}
//             <Row>
//                 <Col md={6}>
//                 <h3>Carousel 1</h3>
//                 <Carousel>
//                     <Carousel.Item>
//                     <img className="d-block w-100" alt="First slide" />
//                     <Carousel.Caption>
//                         <h3>First Slide</h3>
//                         <p>Caption for the first slide.</p>
//                     </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="https://www.otticasm.com/media/catalog/product/cache/all/small_image/1200x800/9df78eab33525d08d6e5fb8d27136e95/0/r/0rw4010__670013__p21__shad__al2.jpg"
//                         alt="Second slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>Second Slide</h3>
//                         <p>Caption for the second slide.</p>
//                     </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="https://www.otticasm.com/media/catalog/product/cache/all/small_image/1200x800/9df78eab33525d08d6e5fb8d27136e95/0/r/0rb2186__1292b1__std__shad__qt.jpg"
//                         alt="Third slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>Third Slide</h3>
//                         <p>Caption for the third slide.</p>
//                     </Carousel.Caption>
//                     </Carousel.Item>
//                 </Carousel>
//                 </Col>

//                 <Col md={6}>
//                 <h3>Carousel 2</h3>
//                 <Carousel>
//                     <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="https://www.otticasm.com/media/catalog/product/cache/all/small_image/1200x800/9df78eab33525d08d6e5fb8d27136e95/o/a/oakley-oo-9465-946501.jpg"
//                         alt="First slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>First Slide</h3>
//                         <p>Another first slide caption.</p>
//                     </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="https://www.otticasm.com/media/catalog/product/cache/all/small_image/1200x800/9df78eab33525d08d6e5fb8d27136e95/0/o/0oo9465__946515__p21__shad__qt.jpg"
//                         alt="Second slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>Second Slide</h3>
//                         <p>Another second slide caption.</p>
//                     </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="https://www.otticasm.com/media/catalog/product/cache/all/small_image/1200x800/9df78eab33525d08d6e5fb8d27136e95/0/o/0oo9013__9013d0__p21__shad__qt.jpg"
//                         alt="Third slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>Third Slide</h3>
//                         <p>Another third slide caption.</p>
//                     </Carousel.Caption>
//                     </Carousel.Item>
//                 </Carousel>
//                 </Col>
//             </Row>
//             <Row>

//                     {/**************** Product Cards ****************/}
//                     {
//                         products.map((product, index) => { 
//                             return (
//                                 <Col md={3} key={index}>
//                                 <Card className="product-card">
//                                     <Card.Img variant="top" src={`http://localhost:3000/api/product/uploads/${product.image}`} />
//                                     <Card.Body>
//                                         <Card.Title>{product.title}</Card.Title>
//                                         <Card.Text>
//                                             {product.description}
//                                         </Card.Text>
//                                         <Button variant="primary">Buy Now</Button>
//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                             )
//                         })
                        
//                     }
//                      {/**************** Product Cards ****************/}
               
               
//             </Row>    
//         </Container>
//         </>
//     )
// }

// export default Homepage;