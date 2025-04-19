import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiAndroid,
  DiPhp,
} from "react-icons/di";
import {
  SiMongodb,
  SiHtml5,
  SiCplusplus,
} from "react-icons/si";
import "./Techstack.css";

const skills = [
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiReact />, name: "React" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <DiPython />, name: "Python" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <DiAndroid />, name: "Android" },
  { icon: <DiPhp />, name: "PHP" },
];

const Techstack = () => {
  return (
    <Container className="techstack-section">
      <h1 className="section-title">
        My <span className="highlight">Skillset</span>
      </h1>
      <Row style={{ justifyContent: "center" }}>
        {skills.map((skill, index) => (
          <Col xs={4} sm={3} md={2} className="tech-icons" key={index}>
            <div className="tech-icon-wrapper">
              {skill.icon}
              <span className="tech-name">{skill.name}</span>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Techstack;
