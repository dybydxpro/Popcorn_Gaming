import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.scss"; // Import the CSS file

const Services: React.FC = () => {
  return (
    <div className="services-section">
      <Container>
        <Row className="services-row">
          <Col xs={12} md={4} className="service-col">
            <div className="service-title">Countries</div>
            <div className="service-number">8+</div>
          </Col>

          <Col xs={12} md={4} className="service-col">
            <div className="service-title">Customers</div>
            <div className="service-number">40+</div>
          </Col>

          <Col xs={12} md={4} className="service-col">
            <div className="service-title">Services</div>
            <div className="service-number">100+</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
