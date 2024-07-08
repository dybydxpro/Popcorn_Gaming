import React from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "../App.scss"; // Import the CSS file

const reviews = [
  {
    name: "John Doe",
    review: "Amazing service! Helped me reach Conqueror rank effortlessly.",
    rating: 5,
    photo: "path/to/john-doe-photo.jpg", // Replace with actual image path
  },
  {
    name: "Jane Smith",
    review: "Professional and reliable. Highly recommended!",
    rating: 5,
    photo: "path/to/jane-smith-photo.jpg", // Replace with actual image path
  },
  {
    name: "Sam Wilson",
    review: "Great experience, will definitely use again.",
    rating: 4,
    photo: "path/to/sam-wilson-photo.jpg", // Replace with actual image path
  },
];

const CustomerReviews: React.FC = () => {
  return (
    <div className="reviews-section">
      <Container>
        <h2 className="reviews-title">What Our Customers Say</h2>
        <Carousel>
          {reviews.map((review, index) => (
            <Carousel.Item key={index}>
              <Card className="review-card">
                <Card.Body>
                  <div className="review-photo-container">
                    <img
                      src={review.photo}
                      alt={review.name}
                      className="review-photo"
                    />
                  </div>
                  <Card.Text className="review-text">"{review.review}"</Card.Text>
                  <Card.Title className="review-name">- {review.name}</Card.Title>
                  <div className="review-rating">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default CustomerReviews;
