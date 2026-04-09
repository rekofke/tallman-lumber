import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Sample project data – you can expand this array over time
const projects = [
  {
    id: 1,
    title: "Mountain View Deck",
    description:
      "A beautiful 500 sq. ft. deck using pressure-treated lumber and our cedar railings.",
    materials:
      "Pressure-treated framing, cedar decking, stainless steel hardware",
    image: "/images/projects/deck1.jpg", // place image in public/images/projects/
    customer: "John & Lisa R., Winnemucca",
  },
  {
    id: 2,
    title: "Custom Kitchen Cabinets",
    description:
      "Handcrafted cabinets from our Fashion Cabinets line, installed by M.T. Construction.",
    materials: "Maple cabinets, soft-close hinges, quartz countertop",
    image: "/images/projects/kitchen1.jpg",
    customer: "The Smith Family",
  },
  {
    id: 3,
    title: "Barn Door Entry",
    description:
      "A custom sliding barn door built in our door shop using reclaimed pine.",
    materials: "Reclaimed pine, heavy-duty hardware",
    image: "/images/projects/barn-door.jpg",
    customer: "M.T. Construction for downtown renovation",
  },
  // add more projects as you get photos
];

const CustomerProjects = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4">Customer Projects</h1>
      <p className="lead mb-5">
        See what our customers are building with materials from Tallman Lumber.
        Have a project you'd like to share? <a href="/contact">Let us know!</a>
      </p>

      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card className="h-100 shadow-sm">
              {project.image && (
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                  style={{ objectFit: "cover", height: "200px" }}
                />
              )}
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {project.customer}
                </Card.Subtitle>
                <Card.Text>
                  {project.description}
                  <br />
                  <small>
                    <strong>Materials:</strong> {project.materials}
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerProjects;
