import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h1>About Tallman Lumber</h1>
          {/* accent box for USP nd support paragraph */}
          <div className="usp-box text-center p-4 mb-4 rounded shadow-sm">
            <h3 className="lead fw-bold mb-3" style={{ color: "#0a192f" }}>
              "Your neighbors. Your lumberyard."
            </h3>
            <p
              className="mb-0"
              style={{ fontSize: "1.1rem", color: "#2c3e66" }}
            >
              Your local family-owned lumber yard dedicated to providing
              top-quality materials and excellent service.
            </p>
          </div>
          <Row className="mt-5">
            <Col md={12}>
              <h3>Our History</h3>
              <p>
                In the high desert of Northern Nevada, a good handshake still
                means something. That simple truth has been the foundation of
                Tallman Lumber since 1955. For nearly seven decades, we've been
                more than just a lumberyard in Winnemucca—we've been your
                neighbors. As a family-owned and operated business, we measure
                our success not just in board feet sold, but in the long-lasting
                friendships we've built along the way. We believe that personal
                interaction, loyalty, and a little bit of old-fashioned
                generosity are the keys to a job well done. Stop by and let us
                show you that while our inventory is vast, our service is still
                personal.
              </p>

              <p className="mt-3">
                Located at{" "}
                <strong>105 S Bridge St, Winnemucca, NV 89445</strong>, we've
                been a cornerstone of the community for generations. The Tallman
                family's roots in the area run deep—originally cattle ranchers
                before establishing the lumber company that continues to serve
                you today. Although the ownership has changed hands over the
                years, our commitment to quality and service remains as strong
                as ever. We take pride in being a part of your projects,
              </p>

              <h3 className="mt-4">Our Commitment to You</h3>
              <p>
                We're proud to maintain a <strong>4.7-star rating</strong> from
                our customers, a reflection of our dedication to exceptional
                service. Whether you're a professional contractor or a weekend
                DIY enthusiast, our knowledgeable team is here to help you find
                exactly what you need for your project.
              </p>

              <p>
                We offer convenient hours—Monday through Friday from 7am to 5pm
                and Saturdays from 8am to 2pm—with wheelchair-accessible parking
                and a commitment to making your visit quick and productive. We
                accept checks, credit cards, and debit cards for your
                convenience.
              </p>
            </Col>
          </Row>
        </Col>

        <Col md={6}>
          <img
            src="/tallman_media/Tallman Jpg/Old TallmanPic.png"
            className="img-fluid rounded mb-4"
            alt="Tallman Lumber historic photo"
          />
          <div className="bg-light p-4 rounded">
            <h4>Hours & Location</h4>
            <p>
              <strong>
                105 S Bridge St
                <br />
                Winnemucca, NV 89445
              </strong>
            </p>
            <p>
              <strong>Phone:</strong> (775) 623-2935
            </p>
            <p>
              <strong>Hours:</strong>
              <br />
              Mon-Fri: 7:00am – 5:00pm
              <br />
              Saturday: 8:00am – 2:00pm
              <br />
              Sunday: 8:00am – 12:00pm
            </p>
            <p className="mb-0">
              <small>
                Wheelchair accessible • Ample parking • Proudly accept all Visa
                & Mastercard.
              </small>
            </p>
          </div>
        </Col>
      </Row>

      {/* Mission Statement Section */}
      <Row className="mt-5">
        <Col className="text-center">
          <div className="p-5 bg-primary text-white rounded">
            <h2>Our Mission</h2>
            <p className="lead mb-0">
              To provide quality lumber and building materials with the kind of
              personal service that turns customers into lifelong neighbors.
              Since 1955, we've measured our success not just in board feet
              sold, but in the trust we build—one handshake at a time.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
