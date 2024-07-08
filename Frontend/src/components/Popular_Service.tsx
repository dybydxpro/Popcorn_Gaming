// import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import card1 from "../Images/image3.png";
// import { Col, Row } from "react-bootstrap";
// import "../App.scss"
// const Popular_Service = () => {
//   return (
//     <div>
//       <br />
//       <h3>Our Popular Service</h3>
//       <p>
//         Unlock unparalleled expertise and performance with our premium rank
//         pushing services. Experience the ultimate in strategy, skill and
//         success.
//       </p>
//       <div>
//         <Row>
//           <Col xs={6} md={4}>
//             <Card style={{ width: "18rem" }}>
//               <Card.Img variant="top" src={card1} />
//               <Card.Body>
//                 <Card.Title>Solo Conqueror </Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="warning">Order Now</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col xs={6} md={4}>
//             <Card style={{ width: "18rem" }}>
//               <Card.Img variant="top" src={card1} />
//               <Card.Body>
//                 <Card.Title>Duo Conqueror</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="warning">Order Now</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col xs={6} md={4}>
//             <Card style={{ width: "18rem" }}>
//               <Card.Img variant="top" src={card1} />
//               <Card.Body>
//                 <Card.Title>Squad Conqueror</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="warning">Order Now</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default Popular_Service;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import card1 from "../Images/image3.png";
import { Col, Row, Container } from "react-bootstrap";
import "../App.scss";

const Popular_Service = () => {
  return (
    <Container className="popular-service-container">
      <h3 className="text-center mt-4">Our <span style={{color:"#FED33A"}}>Popular</span> Service</h3>
      <p className="text-center mb-5">
        Unlock unparalleled expertise and performance with our premium rank
        pushing services. Experience the ultimate in strategy, skill, and
        success.
      </p>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Card className="service-card">
            <Card.Img variant="top" src={card1} />
            <Card.Body>
              <Card.Title>Solo Conqueror</Card.Title>
              <Card.Text>
                Dominate solo matches with our top-notch strategy and skill.
              </Card.Text>
              <Button variant="warning">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Card className="service-card">
            <Card.Img variant="top" src={card1} />
            <Card.Body>
              <Card.Title>Duo Conqueror</Card.Title>
              <Card.Text>
                Team up and conquer with our exceptional duo services.
              </Card.Text>
              <Button variant="warning">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Card className="service-card">
            <Card.Img variant="top" src={card1} />
            <Card.Body>
              <Card.Title>Squad Conqueror</Card.Title>
              <Card.Text>
                Lead your squad to victory with our elite strategies.
              </Card.Text>
              <Button variant="warning">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Popular_Service;
