import React from "react";
import { Container } from "react-bootstrap";

const Privacy = () => {
  return (
    <Container className="my-5">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> April 1, 2025
      </p>
      <p>
        Tallman Lumber ("we", "us", "our") is committed to protecting your
        privacy. This Privacy Policy explains how we collect, use, and share
        information when you visit our website (tallman-lumber.com) or interact
        with us.
      </p>

      <h3>Information We Collect</h3>
      <p>
        We may collect personal information you provide directly, such as your
        name, email address, phone number, and project details when you contact
        us or request a quote. We also collect usage data automatically via
        Google Analytics (e.g., pages visited, referral source).
      </p>

      <h3>How We Use Your Information</h3>
      <ul>
        <li>
          Respond to inquiries, provide quotes, and communicate about your
          projects.
        </li>
        <li>Improve our website and services.</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h3>Sharing of Information</h3>
      <p>
        We do not sell your personal information. We may share it with trusted
        third parties (e.g., email service providers) only as necessary to
        operate our business.
      </p>

      <h3>Your Choices</h3>
      <p>
        You may opt out of marketing emails by contacting us. You can also
        disable cookies in your browser settings.
      </p>

      <h3>Contact Us</h3>
      <p>
        If you have questions about this Privacy Policy, please contact us at:
        <br />
        Tallman Lumber
        <br />
        105 S Bridge St, Winnemucca, NV 89445
        <br />
        (775) 623-2935
        <br />
        tallmanlumber1955@gmail.com
      </p>
    </Container>
  );
};

export default Privacy;
