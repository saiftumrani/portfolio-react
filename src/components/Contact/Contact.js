import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";

function Contact() {
  const fixedEmail = "awaissmr@gmail.com"; // Fixed email value

  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email sending logic here
    console.log(`Sender's Email: ${senderEmail}, Message: ${message}`);
    // Reset form fields
    setSenderEmail(""); // Clear sender's email field
    setMessage(""); // Clear message field
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Row style={{ justifyContent: "center" }}>
        <Col md={6}>
          <h2>Contact Us</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicSenderEmail">
              <Form.Label>Your Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={25}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
