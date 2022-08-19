import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Food from "../../Assets/Projects/FoodApp.png";
import BlueMercury from "../../Assets/Projects/BlueMercury.png";
import SnapDeal from "../../Assets/Projects/SnapDeal.png";
// import suicide from "../../Assets/Projects/caratlane.png";
// import bitsOfCode from "../../Assets/Projects/weather.png";

function Projects() {
  return (
    <Container  fluid className="project-section">
      <div id="project" className="projects-sections"></div>
      <Particle />
      <Container>
        <h1 className="project-heading" >
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BlueMercury}
              isBlog={false}
              title="Clone of BlueMercury"
              description="BlueMercury is an e-commerce website. Have built the user flow of the website from sign up to product description page and the data managed with json server."
              stacks="Tech Stack : REACT, REDUX, JAVASCRIPT, CHAKRA-UI"
              ghLink="https://github.com/Srinivas-Bhat/brisk-hour-6305"
              demoLink="https://srinivasbluemercury.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Food}
              isBlog={false}
              title="Food App"
              description="In this project I have built a web application where user can order a particular food and the respective food will be displayed after certain time interval."
              stacks="Tech Stack : HTML, CSS, JAVASCRIPT"
              ghLink="https://github.com/Srinivas-Bhat/Food-App"
              demoLink="https://glittery-pavlova-f03ed3.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SnapDeal}
              isBlog={false}
              title="Clone of SnapDeal"
              description="A famous e-commerce website. Have built the user flow of the website from sign up to placing the orders, address updating page, and checkout page, and data managed with json server and local storage."
              stacks="Tech Stack : HTML, CSS, JAVASCRIPT"
              ghLink="https://github.com/Srinivas-Bhat/snap-deal-clone"
              demoLink="https://kaleidoscopic-basbousa-9373f1.netlify.app/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Food}
              isBlog={false}
              title="Movie App"
              description="Built a Movie Search app with help of HTML, CSS and Vanilla Javascript. There is also sign up and login functionality. This uses TMDB API to make search requests and display on the page."
              stacks="Tech Stack : HTML, CSS, JAVASCRIPT"
              ghLink="https://github.com/aakarsh604/movieapp"
              demoLink="https://flourishing-mooncake-65c718.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Clone of CaratLane"
              description="A famous e-commerce website. Have built the userflow of the website form sign up to placing the orders with, form and captcha validation, cart quantity updation feature and data managed with json server and local storage."
              stacks="Tech Stack : HTML, CSS, JAVASCRIPT"
              ghLink="https://github.com/Shubham-46/CARAT-LANE-CLONE"
              demoLink="https://sensational-kheer-5c4a81.netlify.app/"              
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
