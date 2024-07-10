import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.scss";
import Nav_bar from '../components/Nav_bar';
import Footer from '../components/Footer';

const CustomerReviewForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0,
    image: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <Container className="review-form-container">
        <Nav_bar/>
        <br />
        <br />
        <br />
        <br />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center">Leave a Review</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formReview">
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="review"
                value={formData.review}
                onChange={handleChange}
                placeholder="Enter your review"
                required
              />
            </Form.Group>

            <Form.Group controlId="formRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                placeholder="Rate out of 5"
                required
                min="1"
                max="5"
              />
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>Profile Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Enter image URL"
              />
            </Form.Group>

            <Button variant="warning" type="submit" className="submit-btn">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <br />
    <Footer/>
    </Container>
    
  );
};

export default CustomerReviewForm;
