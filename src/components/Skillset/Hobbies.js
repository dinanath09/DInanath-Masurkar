import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaMusic, FaCamera, FaGamepad, FaPlane, FaBook } from 'react-icons/fa'; // Added FaPlane for travelling

const Hobbies = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", marginTop: "50px" }}> {/* Increased top margin */}
      {/* Music */}
      <Col md={4} className="hobby-card">
        <div className="hobby-icon">
          <FaMusic size={50} color="#ff8c00" />
        </div>
        <h3 className="hobby-title">Listening to Music</h3>
      </Col>
      
      {/* Photography */}
      <Col md={4} className="hobby-card">
        <div className="hobby-icon">
          <FaCamera size={50} color="#00bcd4" />
        </div>
        <h3 className="hobby-title">Photography</h3>
      </Col>
      
      {/* Gaming */}
      <Col md={4} className="hobby-card">
        <div className="hobby-icon">
          <FaGamepad size={50} color="#8bc34a" />
        </div>
        <h3 className="hobby-title">Gaming</h3>
      </Col>
      
      {/* Travelling - Aeroplane Icon */}
      <Col md={4} className="hobby-card">
        <div className="hobby-icon">
          <FaPlane size={50} color="#ff5722" />  {/* Changed to FaPlane */}
        </div>
        <h3 className="hobby-title">Travelling</h3>
      </Col>

      {/* Reading Books */}
      <Col md={4} className="hobby-card">
        <div className="hobby-icon">
          <FaBook size={50} color="#9c27b0" />
        </div>
        <h3 className="hobby-title">Reading Books</h3>
      </Col>
    </Row>
  );
};

export default Hobbies;
