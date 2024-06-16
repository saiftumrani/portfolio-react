import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from 'emailjs-com';
import '../../style.css'; // Import your CSS file from the root of src folder
function Contact() {
  const fixedEmail = "sologen.ai1@gmail.com"; // Fixed recipient email

  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: senderEmail,
      to_email: fixedEmail,
      message: message,
    };

    emailjs.send(
      'service_2pvru4d',        // Replace with your EmailJS Service ID
      'template_pcy04td',       // Replace with your EmailJS Template ID
      templateParams,
      'BITYK8wlitqEuuMwO'       // Replace with your EmailJS User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('Email sent successfully!');
      setSenderEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setStatus('Failed to send email. Please try again later.');
    });
  };

  return (
    <Container fluid className="contact-section">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="section-title">Contact Us</h2>
          <Form onSubmit={handleSubmit}>
            {/* Sender's Email */}
            <Form.Group controlId="formBasicSenderEmail">
              <Form.Label className="form-label">Your Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                required
                className="form-control"
              />
            </Form.Group>

            {/* Receiver's Email */}
            <Form.Group className="receiverField" controlId="formBasicReceiverEmail">
              <Form.Label className="form-label">Receiver's Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder={fixedEmail} // Show fixed email as placeholder
                value={fixedEmail} // Fixed email value
                readOnly // Use readOnly instead of disabled
                className="form-control"
              />
            </Form.Group>

            {/* Message */}
            <Form.Group controlId="formBasicMessage">
              <Form.Label className="form-label">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="form-control"
              />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit" className="submit-button">
              Submit
            </Button>
          </Form>
          {/* Status Message */}
          {status && <p className="status-message">{status}</p>}
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
