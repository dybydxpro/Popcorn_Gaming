import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.scss"; // Import the CSS file
import Navbar from "../components/Nav_bar";
import Footer from "../components/Footer";


const AboutUs: React.FC = () => {
  return (
    <div className="about-us-section">
      <Container>
      <Navbar />
      <br />
        <Row className="about-us-row">
          <Col xs={12} md={6} className="about-us-col">
            <h2 className="about-us-title">About Us</h2>
            <p className="about-us-text">
              Welcome to our platform! We are passionate about gaming and dedicated to helping you achieve your goals in PUBG Mobile. Our team consists of experienced players who have mastered the game and are here to assist you every step of the way. Whether you're aiming for the Conqueror rank or looking to improve your skills, we've got you covered.
            </p>
            <p className="about-us-text">
              Join our community and experience top-tier services designed to elevate your gameplay. We believe in providing exceptional support and creating a fun, engaging environment for all gamers.
            </p>
          </Col>
          <Col xs={12} md={6} className="about-us-col">
            <img
              src="path/to/your-image.jpg"
              alt="About Us"
              className="about-us-image"
            />
          </Col>
        </Row>
        <Row className="about-us-team-row">
          <h3 className="about-us-team-title">Meet the Team</h3>
          {teamMembers.map((member, index) => (
            <Col xs={12} md={4} className="about-us-team-col" key={index}>
              <div className="team-member">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="team-member-photo"
                />
                <h4 className="team-member-name">{member.name}</h4>
                <p className="team-member-role">{member.role}</p>
              </div>
            </Col>
          ))}
        </Row>
       
      </Container>
      <Footer/>
    </div>
  );
};

const teamMembers = [
  {
    name: "Bawantha Pramod",
    role: "Founder & Lead Coach",
    photo: "path/to/john-doe-photo.jpg", // Replace with actual image path
  },
  {
    name: "Theekshana Johnson",
    role: "Co-Founder & Strategist",
    photo: "path/to/jane-smith-photo.jpg", // Replace with actual image path
  },
  {
    name: "Sasiri Dinujaya",
    role: "Gameplay Analyst",
    photo: "path/to/sam-wilson-photo.jpg", // Replace with actual image path
  },
];

export default AboutUs;
