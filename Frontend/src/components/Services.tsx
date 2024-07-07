// import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// const Services = () => {
//   return (
//     <div>
//       <br />
//       <Container>
//         {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
//         <Row style={{ backgroundColor: "black",borderRadius:"6px",width:"90%",marginLeft:"30px"}}>
//           <Col xs={6} md={4}>
//             <div style={{fontSize:"20px",color:"white",marginLeft:"10%"}}>Countries</div>
//             <div style={{fontSize:"20px",color:"yellow",marginLeft:"20%"}}>8+</div>
//           </Col>

//           <Col xs={6} md={4}>
//           <div style={{fontSize:"20px",color:"white",marginLeft:"30%"}}>Customers</div>
//           <div style={{fontSize:"20px",color:"yellow",marginLeft:"40%"}}>40+</div>
            
//           </Col>
//           <Col xs={6} md={4}>
//           <div style={{fontSize:"20px",color:"white",marginLeft:"70%"}}>Services</div>
//           <div style={{fontSize:"20px",color:"yellow",marginLeft:"74%"}}>100+</div>

//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Services;


import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.scss"; // Import the CSS file

const Services: React.FC = () => {
  return (
    <div>
      <br />
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
