import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import glassess from "../../images/01.png";
import "../Carousel/carousel.css";

const Carousel1 = () => {
  return (
    <Container className="mt-5">
      {/* Big Carousel */}
      <Row className="mb-4">
        <Col>
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col md={6}>
                  <img
                    className="d-block w-100"
                    src="https://www.otticasm.com/media/wysiwyg/home/slider/scroll/2024/RB3025_RB3025_ST__100x50.jpg"
                    alt="Slide 1"
                  />
                </Col>
                <Col md={6}>
                  <img
                    className="d-block w-100"
                    src="https://www.otticasm.com/media/wysiwyg/home/slider/scroll/2024/RB4433M_RB4433M__42.33x21.jpg"
                    alt="Slide 1"
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={6}>
                  <img
                    className="d-block w-100"
                    src="https://www.otticasm.com/media/wysiwyg/home/slider/scroll/2024/RX3447V_RX3447V_ST__100x50.jpg"
                    alt="Slide 2"
                  />
                </Col>
                <Col md={6}>
                  <img
                    className="d-block w-100"
                    src="https://www.otticasm.com/media/wysiwyg/home/slider/scroll/2024/OO9404_A__100x50-2.jpg"
                    alt="Slide 2"
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Row of Four Pictures */}
      <Row className="mb-4">
        <Col md={3}>
          <img
            className="d-block w-100"
            src="https://www.otticasm.com/media/wysiwyg/home/slider/scroll/2024/met.jpg"
          />
        </Col>
        <Col md={3}>
          <img
            className="d-block w-100"
            src="https://www.otticasm.com/media/wysiwyg/home/slider/scroll/2024/poc.jpg"
          />
        </Col>
        <Col md={3}>
          <img
            className="d-block w-100"
            src="https://www.otticasm.com/media/wysiwyg/home/slider/scroll/2024/kask.jpg"
          />
        </Col>
        <Col md={3}>
          <img
            className="d-block w-100"
            src="https://www.otticasm.com/media/wysiwyg/home/slider/scroll/2024/rudy-project.jpg"
          />
        </Col>
      </Row>

      {/* Smaller Carousels */}
      <Row>
        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={glassess} alt="First slide" />
              <Carousel.Caption>
                <p>Caption for the first slide.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.otticasm.com/media/catalog/product/cache/all/small_image/1200x800/9df78eab33525d08d6e5fb8d27136e95/0/r/0rw4010__670013__p21__shad__al2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <p>Caption for the second slide.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.otticasm.com/media/catalog/product/cache/all/small_image/1200x800/9df78eab33525d08d6e5fb8d27136e95/0/r/0rb2186__1292b1__std__shad__qt.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <p>Caption for the third slide.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.otticasm.com/media/catalog/product/cache/all/small_image/1200x800/9df78eab33525d08d6e5fb8d27136e95/o/a/oakley-oo-9465-946501.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <p>Another first slide caption.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.otticasm.com/media/catalog/product/cache/all/small_image/1200x800/9df78eab33525d08d6e5fb8d27136e95/0/o/0oo9465__946515__p21__shad__qt.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <p>Another second slide caption.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.otticasm.com/media/catalog/product/cache/all/small_image/1200x800/9df78eab33525d08d6e5fb8d27136e95/0/o/0oo9013__9013d0__p21__shad__qt.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <p>Another third slide caption.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Additional Carousel */}
      <Row className="mt-4">
        <Col>
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col md={6}>
                  <img
                    className="d-block w-100"
                    src="https://www.otticasm.com/media/wysiwyg/home/slider/scroll/2024/VE4475__42.33x21.17.jpg"
                    alt="Slide 1"
                  />
                </Col>
                <Col md={6}>
                  <img
                    className="d-block w-100"
                    src="https://www.otticasm.com/media/wysiwyg/home/slider/scroll/2024/JC3017U__42.33x21.17.jpg"
                    alt="Slide 1"
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={6}>
                  <img
                    className="d-block w-100"
                    src="https://www.otticasm.com/media/wysiwyg/home/slider/scroll/2024/PO0649_M__42.33x21.17.jpg"
                    alt="Slide 2"
                  />
                </Col>
                <Col md={6}>
                  <img
                    className="d-block w-100"
                    src="https://www.otticasm.com/media/wysiwyg/home/slider/scroll/2024/DG2305_DG2305__42.33x21.17.jpg"
                    alt="Slide 2"
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Carousel1;
