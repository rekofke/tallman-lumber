import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key (as a string)
emailjs.init({
  publicKey: "fKStqCPxCnu6RfbCj", // <-- quotes added
});

// Replace these with your actual values from EmailJS (now in quotes)
const YOUR_SERVICE_ID = "service_qgwb86c"; // <-- quotes
const YOUR_GENERAL_TEMPLATE_ID = "template_7qfrn8b"; // <-- quotes
const YOUR_QUOTE_TEMPLATE_ID = "template_hekne6ks"; // <-- quotes

const Contact = () => {
  const [key, setKey] = useState("general");

  // State for general form
  const [generalData, setGeneralData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for quote form
  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    details: "",
  });

  // Loading states to prevent double submissions
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
        to_email: "tallmanlumber1955@gmail.com", // Your business email
      })
      .then(
        (result) => {
          alert("Thank you! Your message has been sent successfully.");
          setGeneralData({ name: "", email: "", message: "" });
          setGeneralLoading(false);
        },
        (error) => {
          alert(
            "Oops! Something went wrong. Please try again or call us directly.",
          );
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
        to_email: "tallmanlumber1955@gmail.com",
      })
      .then(
        (result) => {
          alert("Thank you for your quote request! We'll contact you shortly.");
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
          alert(
            "Oops! Something went wrong. Please try again or call us directly.",
          );
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
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={generalData.name}
                    onChange={handleGeneralChange}
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={generalData.email}
                    onChange={handleGeneralChange}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={generalData.message}
                    onChange={handleGeneralChange}
                    placeholder="How can we help?"
                    required
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={generalLoading}
                >
                  {generalLoading ? "Sending..." : "Send Message"}
                </Button>
              </Form>
            </Tab>

            <Tab eventKey="quote" title="Request a Quote">
              <Form onSubmit={handleQuoteSubmit}>
                <Form.Group className="mb-3" controlId="quoteName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={quoteData.name}
                    onChange={handleQuoteChange}
                    placeholder="Your name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="quoteEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={quoteData.email}
                    onChange={handleQuoteChange}
                    placeholder="Your email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="quotePhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={quoteData.phone}
                    onChange={handleQuoteChange}
                    placeholder="Best number to reach you"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="projectType">
                  <Form.Label>Project Type</Form.Label>
                  <Form.Select
                    name="projectType"
                    value={quoteData.projectType}
                    onChange={handleQuoteChange}
                  >
                    <option value="">Select...</option>
                    <option value="new-construction">New Construction</option>
                    <option value="remodel">Remodel</option>
                    <option value="deck">Deck/Patio</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="quoteDetails">
                  <Form.Label>Tell us about your lumber needs</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="details"
                    value={quoteData.details}
                    onChange={handleQuoteChange}
                    placeholder="Dimensions, quantities, materials, etc."
                  />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={quoteLoading}>
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
