import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import emailjs from "@emailjs/browser";

// Replace with your actual IDs from EmailJS
const YOUR_SERVICE_ID = "service_rkxehtc"; // from Email Services
const YOUR_GENERAL_TEMPLATE_ID = "template_00g8o3e"; // from General Inquiry template
const YOUR_QUOTE_TEMPLATE_ID = "template_acf4hcn"; // from Quote Request template
const YOUR_PUBLIC_KEY = "OOjOprSr0bMkHSOlZ"; // from Account → API Keys

// Initialize EmailJS with your public key (once, outside the component)
emailjs.init({
  publicKey: YOUR_PUBLIC_KEY,
});

const Contact = () => {
  const [key, setKey] = useState("general");

  // General form state
  const [generalData, setGeneralData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Quote form state
  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    details: "",
  });

  const [generalLoading, setGeneralLoading] = useState(false);
  const [quoteLoading, setQuoteLoading] = useState(false);

  const handleGeneralChange = (e) => {
    setGeneralData({ ...generalData, [e.target.name]: e.target.value });
  };

  const handleQuoteChange = (e) => {
    setQuoteData({ ...quoteData, [e.target.name]: e.target.value });
  };

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    setGeneralLoading(true);

    emailjs
      .send(YOUR_SERVICE_ID, YOUR_GENERAL_TEMPLATE_ID, {
        from_name: generalData.name,
        from_email: generalData.email,
        message: generalData.message,
      })
      .then(
        () => {
          alert("Thank you! Your message has been sent.");
          setGeneralData({ name: "", email: "", message: "" });
          setGeneralLoading(false);
        },
        (error) => {
          alert("Oops! Something went wrong. Please try again.");
          console.error("EmailJS error:", error);
          setGeneralLoading(false);
        },
      );
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteLoading(true);

    emailjs
      .send(YOUR_SERVICE_ID, YOUR_QUOTE_TEMPLATE_ID, {
        from_name: quoteData.name,
        from_email: quoteData.email,
        phone: quoteData.phone,
        projectType: quoteData.projectType,
        details: quoteData.details,
      })
      .then(
        () => {
          alert("Thank you! Your quote request has been sent.");
          setQuoteData({
            name: "",
            email: "",
            phone: "",
            projectType: "",
            details: "",
          });
          setQuoteLoading(false);
        },
        (error) => {
          alert("Oops! Something went wrong. Please try again.");
          console.error("EmailJS error:", error);
          setQuoteLoading(false);
        },
      );
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4">Contact Us</h1>
      <Row>
        <Col md={6}>
          <Tabs
            id="contact-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="general" title="General Inquiry">
              <Form onSubmit={handleGeneralSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={generalData.name}
                    onChange={handleGeneralChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={generalData.email}
                    onChange={handleGeneralChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={generalData.message}
                    onChange={handleGeneralChange}
                    required
                  />
                </Form.Group>
                <Button type="submit" disabled={generalLoading}>
                  {generalLoading ? "Sending..." : "Send Message"}
                </Button>
              </Form>
            </Tab>

            <Tab eventKey="quote" title="Request a Quote">
              <Form onSubmit={handleQuoteSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={quoteData.name}
                    onChange={handleQuoteChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={quoteData.email}
                    onChange={handleQuoteChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={quoteData.phone}
                    onChange={handleQuoteChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Project Type</Form.Label>
                  <Form.Select
                    name="projectType"
                    value={quoteData.projectType}
                    onChange={handleQuoteChange}
                  >
                    <option value="">Select...</option>
                    <option value="New Construction">New Construction</option>
                    <option value="Remodel">Remodel</option>
                    <option value="Deck/Patio">Deck/Patio</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Project Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="details"
                    value={quoteData.details}
                    onChange={handleQuoteChange}
                    placeholder="Dimensions, quantities, materials, etc."
                  />
                </Form.Group>
                <Button type="submit" disabled={quoteLoading}>
                  {quoteLoading ? "Sending..." : "Request Quote"}
                </Button>
              </Form>
            </Tab>
          </Tabs>
        </Col>

        <Col md={6}>
          <h5>Visit Us</h5>
          <p>
            105 S. Bridge St.
            <br />
            Winnemucca, NV 89445
          </p>
          <h5>Hours</h5>
          <p>
            Mon-Fri: 7am - 5pm
            <br />
            Sat: 8am - 2pm
            <br />
            Sun: 8am - 12pm
          </p>
          <h5>Phone</h5>
          <p>(775) 623-2935</p>
          <h5>Email</h5>
          <p>tallmanlumber1955@gmail.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
