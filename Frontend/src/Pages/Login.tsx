import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import logo from "../Images/logo.png";
import "../App.scss";

const LoginPage = () => {
  return (
    <Container fluid className="login-container">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={6} lg={4}>
          <Card className="shadow-lg">
            <Card.Body>
              <div className="text-center">
                <a href="/">
                  <img
                    src={logo}
                    width="65"
                    height="65"
                    alt="Logo"
                    className="mb-2"
                  />
                </a>

                <h3 className=" mb-4">Login</h3>
              </div>

              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="warning" type="submit" className="w-100 mt-3">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
