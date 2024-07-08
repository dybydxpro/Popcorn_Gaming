import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.scss"; // Import the CSS file
import Nav_bar from "../components/Nav_bar";
import Footer from "../components/Footer";

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-section">
      <Container>
        <Nav_bar/>
        <br />
        <Row className="contact-us-row">
          <Col xs={12} md={6} className="contact-us-col">
            <h2 className="contact-us-title">Get in Touch</h2>
            <p className="contact-us-text">
              We're here to help and answer any question you might have. We look forward to hearing from you!
            </p>
            <Form className="contact-us-form">
              <Form.Group controlId="formName">
                <Form.Label className="form-label">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" className="form-input" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className="form-label">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" className="form-input" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label className="form-label">Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" className="form-input" />
              </Form.Group>

              <Button variant="warning" type="submit" className="form-button">
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={6} className="contact-us-col">
            <h2 className="contact-us-title">Contact Information</h2>
            <p className="contact-us-text">
              Email: support@example.com
              <br />
              Phone: +1 234 567 890
              <br />
              Address: 1234 Gaming St, Gamer City, GC 56789
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1531141319417!2d-122.4194155846816!3d37.77492927975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ff5dbd89%3A0x4c4b5f8a9b66e7b2!2s1234%20Gaming%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2s!4v1616695644200!5m2!1sen!2s"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default ContactUs;
