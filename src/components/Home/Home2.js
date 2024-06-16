import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
<<<<<<< HEAD
              LET US <span className="purple"> INTRODUCE </span> OURSELVES
=======
              LET US <span className="purple"> TRANSFORM </span> WITH SOLOGENAI
>>>>>>> c04372b58305ad90493600509d0c97ada8071fca
            </h1>
            <p className="home-about-body">
              <b>Enhancing Everyday Life with Smart AI Solutions</b>


          
     



              <br />
              <br /> Discover how AI can make your daily life easier and more enjoyable with 
              <i>
                <b className="purple"> SoloGen AI.</b>
              </i>
              <br />
              Our intelligent solutions integrate seamlessly into your &nbsp;
              <i>
                <b className="purple">routine, offering convenience, efficiency, and enhanced experiences.</b> 
              </i>
              <br />
              <br />
              Whether it's
              <b className="purple"> simplifying tasks, providing personalized recommendations,</b> or
              <i>
                <b className="purple">
                  {" "}
                  automating daily chores, we bring the future to your fingertips.
                  </b>
              </i>
              <i>
              <br />
              <br />

              Experience the ease of life with 
                <b className="purple"> SoloGen AI.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />

            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            {/* <h1>FIND ME ON</h1> */}
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/saiftumrani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/saiftumrani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <RiTwitterXFill />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/saiftumrani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/saiftumrani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
