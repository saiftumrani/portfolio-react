import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>

        

        <Col md="6" className="footer-copywright">
          <h3>Made with <span role="img">❤️</span> by us</h3>
        </Col>

       

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/saiftumrani"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/saiftumrani"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <RiTwitterXFill />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/saiftumrani/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/saiftumrani"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
