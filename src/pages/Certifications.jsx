import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCertificate } from "react-icons/fa";
import "./Certifications.css";

const certifications = [
  {
    title: "Software Testing",
    issuer: " Besant Technologies",
    link: "https://www.linkedin.com/posts/dinanath-masurkar-583883229_softwaretesting-manualtesting-automationtesting-activity-7307091954142433280-Ds5h?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADlCj3MB8xo7aaL3gJl6GD1Lb9YcMbJzHoQ",
  },
  {
    title: "Frontend Development with React",
    issuer: "FreeCodeCamp",
    link: "https://freecodecamp.org/certificate/sample2",
  },
  {
    title: "Android App Development",
    issuer: "Udemy",
    link: "https://udemy.com/certificate/sample3",
  },
];

const Certifications = () => {
  return (
    <Container className="cert-section">
      <h1 className="cert-title">
        My <span className="highlight">Certifications</span>
      </h1>
      <Row className="justify-content-center">
        {certifications.map((cert, index) => (
          <Col xs={10} md={4} key={index} className="cert-card">
            <div className="cert-icon"><FaCertificate /></div>
            <h5>{cert.title}</h5>
            <p>{cert.issuer}</p>
            <Button variant="outline-info" href={cert.link} target="_blank">
              View Certificate
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Certifications;
