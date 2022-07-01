import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aakarsh Devadiga </span>
            from <span className="purple"> Udupi, Karnataka, India.</span>
            <br /> I have completed my Engineering an studied Ful stack Web Development, speacializing in MERN Stack
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading 
            </li>
            <li className="about-activity">
              <ImPointRight /> Movies and Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aakarsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
