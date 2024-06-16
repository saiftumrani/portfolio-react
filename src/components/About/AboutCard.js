import React from "react";
import Card from "react-bootstrap/Card";
import Particle from "../Particle";
function AboutCard() {
  return (
    <Card className="quote-card-view">
            <Particle />

      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">SolGen AI </span>
            from is dedicated to making everyday life smarter and easier through innovative AI solutions. Our mission is to integrate advanced technology into your daily routine, simplifying tasks and enhancing personal experiences.
            <br />
            <br />
            <br />

            Founded by a team of tech enthusiasts, we focus on creating user-friendly tools for smart homes, personalized recommendations, health insights, and daily assistance. With cutting-edge AI, we bring the future to your fingertips, ensuring our solutions are intuitive, secure, and tailored to your needs<br />
            <br />
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Experience the Future of Everyday Living with SoloGen AI."{" "}
          </p>
          {/* <footer className="blockquote-footer">Awais</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
