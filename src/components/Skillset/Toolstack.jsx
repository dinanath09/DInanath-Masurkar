import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  SiVisualstudio,
  SiPycharm,
  SiAndroidstudio,
  SiEclipseide,
} from "react-icons/si";
import "./Toolstack.css";

const tools = [
  { icon: <SiVisualstudio />, name: "Visual Studio" },
  { icon: <SiPycharm />, name: "PyCharm" },
  { icon: <SiAndroidstudio />, name: "Android Studio" },
  { icon: <SiEclipseide />, name: "Eclipse IDE" },
];

const Toolstack = () => {
  return (
    <Container className="toolstack-section">
      
      <Row style={{ justifyContent: "center" }}>
        {tools.map((tool, index) => (
          <Col xs={4} sm={3} md={2} className="tech-icons" key={index}>
            <div className="tech-icon-wrapper">
              {tool.icon}
              <span className="tech-name">{tool.name}</span>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Toolstack;
