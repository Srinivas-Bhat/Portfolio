import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Clone of ASOS"
              description="Asos is an e-commerce website. Have built the userflow of the website form sign up to placing the orders with cart updation feature and data managed with json server."
              stacks="Tech Stack : REACT, REDUX, JAVASCRIPT, CHAKRA-UI"
              ghLink="https://github.com/aakarsh604/Asos-Clone"
              demoLink="https://famous-yeot-9daac6.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather App"
              description="This project is about building a web application to show a weather forecast using weather API. It shows city and current location based data with next 5 hours and 5 days forecast."
              stacks="Tech Stack : REACT, JAVASCRIPT, TAILWIND-CSS, REST-API"
              ghLink="https://github.com/aakarsh604/React_WeatherApp"
              demoLink="https://incandescent-toffee-012bd4.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Clone of Gearbest"
              description="A famous e-commerce website. Have built the userflow of the website form sign up to placing the orders with, form and captcha validation, cart quantity updation feature and data managed with json server and local storage."
              stacks="Tech Stack : HTML, CSS, JAVASCRIPT"
              ghLink="https://github.com/aakarsh604/Gearbest-Clone"
              demoLink="https://silly-queijadas-e172c2.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Movie App"
              description="Built a Movie Search app with help of HTML, CSS and Vanilla Javascript. There is also sign up and login functionality. This uses TMDB API to make search requests and display on the page. It also supports debouncing feature."
              stacks="Tech Stack : HTML, CSS, JAVASCRIPT"
              ghLink="https://github.com/aakarsh604/movieapp"
              demoLink="https://flourishing-mooncake-65c718.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Clone of CaratLane"
              description="A famous e-commerce website. Have built the userflow of the website form sign up to placing the orders with, form and captcha validation, cart quantity updation feature and data managed with json server and local storage."
              stacks="Tech Stack : HTML, CSS, JAVASCRIPT"
              ghLink="https://github.com/Shubham-46/CARAT-LANE-CLONE"
              demoLink="https://sensational-kheer-5c4a81.netlify.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
