import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "../App.scss"; // Import the CSS file
import Nav_bar from "../components/Nav_bar";
import Footer from "../components/Footer";

const FAQ: React.FC = () => {
  return (
    <div className="faq-section">
        <Nav_bar/>
        <br />
      <Container>
        <Row className="faq-row">
          <Col xs={12} className="faq-col">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <Accordion className="faq-accordion">
              {faqItems.map((item, index) => (
                <Card key={index} className="faq-card">
                  <Accordion.Item eventKey={String(index)}>
                    <Accordion.Header className="faq-header">
                      {item.question}
                    </Accordion.Header>
                    <Accordion.Body className="faq-body">
                      {item.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

const faqItems = [
  {
    question: "What services do you offer?",
    answer: "We offer a variety of services to help you achieve your goals in PUBG Mobile, including coaching, account boosting, and gameplay analysis."
  },
  {
    question: "How can I contact you?",
    answer: "You can contact us via email at support@example.com or phone at +1 234 567 890."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a full refund within 7 days of purchase if you are not satisfied with our services."
  },
  {
    question: "Do you offer any discounts?",
    answer: "Yes, we offer seasonal discounts and special offers. Subscribe to our newsletter to stay updated on the latest deals."
  }
];

export default FAQ;
