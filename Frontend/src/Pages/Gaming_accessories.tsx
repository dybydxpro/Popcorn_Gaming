import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.scss"; // Import the CSS file
import Nav_bar from "../components/Nav_bar";
import Footer from "../components/Footer";

const GamingAccessories: React.FC = () => {
  const accessories = [
    {
      name: "Gaming Mouse",
      description: "High precision gaming mouse with customizable RGB lighting.",
      image: "https://via.placeholder.com/150",
      price: "$49.99",
    },
    {
      name: "Mechanical Keyboard",
      description: "Mechanical keyboard with tactile feedback and programmable keys.",
      image: "https://via.placeholder.com/150",
      price: "$79.99",
    },
    {
      name: "Gaming Headset",
      description: "Surround sound gaming headset with noise-canceling microphone.",
      image: "https://via.placeholder.com/150",
      price: "$69.99",
    },
    {
      name: "Gaming Chair",
      description: "Ergonomic gaming chair with adjustable height and lumbar support.",
      image: "https://via.placeholder.com/150",
      price: "$199.99",
    },
  ];

  return (
    <div className="gaming-accessories-section">
        <Nav_bar/>
        <br />
        <br />
        <br />
      <Container>
        <Row className="gaming-accessories-row">
          <Col xs={12} className="gaming-accessories-col">
            <h2 className="gaming-accessories-title">Gaming Accessories</h2>
            <Row>
              {accessories.map((accessory, index) => (
                <Col xs={12} md={6} lg={3} key={index} className="accessory-col">
                  <Card className="accessory-card">
                    <Card.Img variant="top" src={accessory.image} className="accessory-image" />
                    <Card.Body>
                      <Card.Title className="accessory-name">{accessory.name}</Card.Title>
                      <Card.Text className="accessory-description">
                        {accessory.description}
                      </Card.Text>
                      <Card.Text className="accessory-price">{accessory.price}</Card.Text>
                      <Button variant="warning" className="buy-button">Buy Now</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default GamingAccessories;
