import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DinanathImg from "../../assets/Dinanath.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, My name is <span className="yellow">Dinanath Bhagwan Masurkar</span> and I'm from
              <span className="yellow"> Sindhudurg, Maharashtra, India.</span>
              <br />
              <br />
              I completed my <span className="yellow">Diploma in Computer Engineering</span> and am
              currently pursuing my Bachelor's degree in the same field from Mumbai University.
              <br />
              <br />
              As an <b className="yellow">Engineer</b>, I enjoy building web applications and solving real-world problems with code. I'm always eager to learn new technologies and take on new challenges.
              <br />
              <br />
              I'm skilled in <span className="yellow">JavaScript, C, C++, Java, Python,</span> and <span className="yellow">PHP</span>, and I have experience working with MySQL and MongoDB databases.
              <br />
              <br />
              I've built various <span className="yellow">projects</span> including an AI-based image generator, a college management system, and an Event Management System.
              <br />
              <br />
              I am also interested in building new
              <i>
                <b className="yellow"> Web Technologies and Product Designs</b>
              </i> as well as exploring areas related to{" "}
              <b className="yellow">Artificial Intelligence and Data Visualization.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar d-flex justify-content-center">
  <Tilt
    glareEnable={true}
    glareMaxOpacity={0.3}
    glareColor="#ffffff"
    glarePosition="all"
    scale={1.05}
    transitionSpeed={2500}
  >
    <div style={{ position: "relative", width: "100%", maxWidth: "260px", margin: "auto" }}>
      {/* Animated background layer */}
      <div
        style={{
          position: "absolute",
          top: "-10px",
          left: "-10px",
          right: "-10px",
          bottom: "-10px",
          zIndex: 0,
          borderRadius: "25px",
          background: "linear-gradient(45deg, #00f2ff, #8a2be2, #00ff94)",
          backgroundSize: "600% 600%",
          animation: "animatedGlow 6s ease infinite",
          filter: "blur(25px)",
          opacity: 0.7,
        }}
      ></div>

      {/* Image Container */}
      <div
        style={{
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 0 30px rgba(0, 123, 255, 0.4)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 1,
        }}
      >
        <img
          src={DinanathImg}
          alt="Dinanath Masurkar"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "20px",
            display: "block",
          }}
        />
      </div>
    </div>
  </Tilt>
</Col>

        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dinanath09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Dinanath09?t=ucPI-ZUesKwiupgK2LqyQA&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dinanath-masurkar-583883229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
