import React from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";

const referrals = [
  {
    name: "M.T. Cabinets",
    contact: "Mike Thompson",
    phone: "775-304-7643",
    Services: "Sales - Design - Installation - Remodels",
    logo: null,
  },
  {
    name: "J.R. Builders",
    contact: "Ben Burhans",
    phone: "775-530-6935",
    Services: "General contractor and home builder",
  },
  {
    name: "LA Landscapes",
    contact: "Lucas Alezander",
    phone: "776-304-7251",
    email: "lalandsapesnc@gmail.com",
    services:
      "Paver patios/walkways | Retaining walls | edging | Sprinkler systems | Sod",
  },
  {
    name: "Fredy's Handyman Services",
    contact: "Fredy Ojendiz",
    phone: "775-770-8603",
    services:
      "Ceramic tile | Drywall | Painting | Carpentry | Fence repair | Bathroom remodel | Decks | Doors",
  },
  {
    name: "Rose Creek Construction",
    contact: "Aaron Nelson",
    phone: "775-621-6089",
    email: "aaronnelson1996@gmail.com",
    services: "Residential & Small Commercial Construction",
  },
  {
    name: "Aspen Creek Construction",
    contact: "Dylan Campbell",
    phone: "775-375-1235",
    email: "dylan@aspencreek.com",
    services: "General Construction & Building Contractor",
  },
  {
    name: "Supreme Construction",
    contact: "Ivan & Miguel",
    phone: "775-304-6413 | 775-625-7136",
    services: "Tile | Concrete | Drywall | Paint | Decks",
  },
  {
    name: "Garcia Construction",
    contact: "Jose Garcia-Lara",
    phone: "775-304-3249",
    email: "garciaj999@yahoo.com",
  },
  {
    name: "Burchette Builders",
    contact: "Josh Burchette",
    phone: "775-625-7715",
    services: "Residential Remodel and General Construction",
  },
  {
    name: "A & J Highmark Construction",
    contact: "Alex",
    phone: "775-304-1114",
  },
  {
    name: "Alberto Estrada",
    phone: "775-304-4517",
    services:
      "Multi-talented handyman services including drywall, painting, tile, decks, and more",
  },
];

const Referrals = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4">Local Business & Contractor Referrals</h1>
      <p className="lead mb-5">
        We're proud to work with these trusted local professionals. Give them a
        call for your next project!
      </p>

      <Row xs={1} md={2} lg={3} className="g-4">
        {referrals.map((ref, idx) => (
          <Col key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{ref.name}</Card.Title>
                {ref.contact && (
                  <Card.Subtitle className="mb-2 text-muted">
                    Contact: {ref.contact}
                  </Card.Subtitle>
                )}
                <Card.Text>{ref.description}</Card.Text>
                <ul className="list-unstyled mt-3">
                  {ref.phone && (
                    <li>
                      <strong>Phone:</strong>{" "}
                      <a href={`tel:${ref.phone}`}>{ref.phone}</a>
                    </li>
                  )}
                  {ref.email && (
                    <li>
                      <strong>Email:</strong>{" "}
                      <a href={`mailto:${ref.email}`}>{ref.email}</a>
                    </li>
                  )}
                  {ref.website && (
                    <li>
                      <strong>Website:</strong>{" "}
                      <a
                        href={ref.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {ref.website.replace(/^https?:\/\//, "")}
                      </a>
                    </li>
                  )}
                </ul>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                {ref.phone && (
                  <Button
                    variant="outline-primary"
                    size="sm"
                    href={`tel:${ref.phone}`}
                  >
                    Call Now
                  </Button>
                )}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      <p className="text-muted mt-5">
        *These are independent businesses. Please contact them directly for
        services and pricing. To be added to our referral list, please ask
        in-store or contact us.
      </p>
    </Container>
  );
};

export default Referrals;
