import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import studentManagementImg from "../assets/projects/StudentManagement.png";
import eventImg from "../assets/projects/event.png";
import ImageGenerator from "../assets/projects/ImageGenerator.png";
import Certifications from "../components/Certifications/Certifications";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ s: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studentManagementImg}
              isBlog={false}
              title="Student Management System"
              description="This is a responsive and user-friendly Student Management System built using HTML and CSS. The website is designed to help educational institutions manage student information effectively. It includes basic front-end pages like the Home, Student List, Add Student, About, and Contact sections."
              ghLink="https://github.com/dinanath09/Student-Management-System.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventImg}
              isBlog={false}
              title="Event Management System"
              description="The Event Management System is a web-based platform that simplifies event organization, registration, and ticket booking. It enables users to manage events efficiently, track participation, and streamline communication between organizers and attendees."
              ghLink="https://github.com/dinanath09/Event-Management-System.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ImageGenerator}
              isBlog={false}
              title="AI-Based Image Generator"
              description="An intelligent web application that transforms text prompts into high-quality images using advanced models like Stable Diffusion and CLIP. The system enables users to generate visuals in real time with support for multiple languages and a user-friendly interface — empowering creativity without the need for design skills."
              ghLink=""
            />
          </Col>
        </Row>
        <Container fluid className="project-section">
  <Particle />

  <Container>
    <h1 className="project-heading">
      Recent Top <strong className="purple">Works </strong>
    </h1>
    <p style={{ color: "white" }}>
      Here are a few projects I’ve worked on recently.
    </p>
    
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {/* Your ProjectCards here */}
    </Row>

    {/* ADD THIS BELOW */}
    <Certifications />
  </Container>
</Container>

      </Container>
    </Container>
  )
}

export default Projects