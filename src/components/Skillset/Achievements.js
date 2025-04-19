import React from "react";
import { Row, Col } from "react-bootstrap";

const Achievements = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", marginTop: "50px" }}>
      <Col md={6} className="achievement-card">
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}>
          🥈 Runner-up in Project Exhibition - Virtuosic 2k25 
        </h2>
      </Col>
      <Col md={6} className="achievement-card">
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}>
          🥉 Third Prize in Paper Evolution - Virtuosic 2k25
        </h2>
      </Col>
    </Row>
  );
};

export default Achievements;
