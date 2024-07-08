import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.scss"; // Import the CSS file
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-row">
          <Col xs={12} md={4} className="footer-col">
            <h4 className="footer-title">About Us</h4>
            <p className="footer-text">
              We are dedicated to providing top-tier services to help you reach your PUBG Mobile goals. Join us and become a conqueror!
            </p>
          </Col>

          <Col xs={12} md={4} className="footer-col">
            <h4 className="footer-title">Contact Us</h4>
            <p className="footer-text">
              Email: popcorngaming918@gmail.com
              <br />
              Phone: +94 76 2320 104
              <br />
              Address:No 32, Vihara Mawatha, Tangalle.
            </p>
          </Col>

          <Col xs={12} md={4} className="footer-col">
            <h4 className="footer-title">Follow Us</h4>
            <div className="footer-socials">
              <a href="#" className="social-link">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" className="social-link">
                <FaTiktok />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col className="text-center">
            <p className="footer-copyright">
              © 2024 PoPcorn Gaming. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
