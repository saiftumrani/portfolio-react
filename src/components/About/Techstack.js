import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaServer } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";


import {
 
  DiGit,
  
} from "react-icons/di";
import {
  SiTensorflow,
  SiPython,
  SiPytorch,
  SiNvidia,
  SiPandas,
  SiNumpy
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNvidia />
        </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaServer />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineSecurity />
      </Col>


    </Row>
  );
}

export default Techstack;
