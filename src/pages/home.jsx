import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import HeroImage from "../components/HeroImage.jsx";
import ReviewsWidget from "../components/ReviewsWidget";

const Home = () => {
  // ***** PRODUCTS ARRAY – make sure it's here *****
  const products = [
    {
      name: "Framing Lumber",
      description:
        "Premium kiln-dried dimensional lumber. We carry 1x, 2x, 3x and 4x materials in lengths from 8-20 feet",
      image:
        "public/tallman_media/Tallman Jpg/Tallman non-converted pics/Alleu2.jpg",
    },
    {
      name: "Doors",
      description:
        "A large selection of interior and exterior doors and a variety of size options, built to your specifications",
      image: "/tallman_media/Tallman Jpg/woodgrain.jpg",
    },
    {
      name: "Windows",
      description:
        "Chose from one of our many sized beautiful Amsco windows in stock, or have your dream window custom built and shipped to us.",
      image: "tallman_media/Tallman Jpg/amsco1.webp",
    },
    {
      name: "Cabinets",
      description:
        "No dream home is complete without the personal touch of hand fashioned cabinets designed just how you want them.",
      image: "/tallman_media/Tallman Jpg/cabinets3.png",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <HeroImage />

      {/* Section 1: About Us – with accent box */}
      <div className="accent-box mx-2 mx-md-4">
        <Container className="my-3">
          <Row className="align-items-center">
            <Col md={6}>
              <h1>About Tallman Lumber</h1>
              <p>
                For over 65 years, Nevadans have looked to Tallman Lumber for
                quality lumber and building materials as well as excellent
                customer service. We are a proud family owned business dedicated
                to helping you build your dreams with expert advice and
                top-notch products.
              </p>
              <Button
                variant="primary"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/about");
                }}
              >
                Read our Story
              </Button>
            </Col>
            <Col md={6}>
              <img
                src="tallman_media/Tallman Jpg/Storefront.jpg"
                className="img-fluid rounded mx-auto d-block"
                alt="Tallman Lumber storefront"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Section 2: Featured Products – with accent box */}
      <div className="products-accent mx-2 mx-md-4">
        <Container className="my-4">
          <h2 className="text-center my-4">Our Products</h2>
          <Row>
            {products.map((product, idx) => {
              // Map product name to the corresponding section ID on the Products page
              const linkMap = {
                "Framing Lumber": "#lumber",
                Doors: "#doors",
                Windows: "#windows",
                Cabinets: "#cabinets",
              };
              const anchor = linkMap[product.name] || "";

              return (
                <Col md={3} key={idx}>
                  <Card className="mb-4 h-100 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={product.image}
                      className="img-fluid rounded-top"
                      alt={product.name}
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Button
                        as={Link}
                        to={`/products${anchor}`}
                        variant="outline-primary"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      {/* Section 3: Customer Reviews */}
      <Container className="my-5">
        <h2 className="text-center my-4">What Our Customers Say</h2>
        <div className="reviews-wrapper p-4 bg-light rounded shadow-sm">
          <ReviewsWidget />
        </div>
      </Container>
    </>
  );
};

export default Home;
