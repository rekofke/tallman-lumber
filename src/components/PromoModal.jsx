import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const PromoModal = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // check if user has already seen/submittd the modal
    const hasSeenPromo = localStorage.getItem("tallmanPromoSeen");
    if (!hasSeenPromo) {
      // Show modal after 3 seconds
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem("tallmanPromoSeen", "dismissed");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the email to your mailing list (mailchiimp, emailjs, etc.)
    console.log("Email submitted", email);
    setSubmitted(true);
    // Store that user has submitted so we dont show again
    localStorage.setItem("tallmanPromoSeen", "submitted");
    // Optionally close after a moment
    setTimeout(() => setShow(false), 1500);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title> Get 10% off your first order!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!submitted ? (
          <>
            <p>
              Join our mailing list and receive a coupon for 10% off any
              purchase. Be the first to know about new arrivals and special
              offers!
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="promoEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3 w-100">
                Get My Coupon
              </Button>
            </Form>
          </>
        ) : (
          <p className="text=success mv-0">
            Thank you! Check your inbox for your coupon code.
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No thanks, I'll pay full price
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PromoModal;
