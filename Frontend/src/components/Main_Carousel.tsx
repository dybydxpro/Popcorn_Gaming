// import Carousel from "react-bootstrap/Carousel";
// // import ExampleCarouselImage1 from "../Images/image1.png";
// import ExampleCarouselImage2 from "../Images/image2.png";
// // import ExampleCarouselImage3 from "../Images/image3.png";



// function Carousel_main() {
//   return (
//     <div>
//       <Carousel>
//         <Carousel.Item>
//           <img src={ExampleCarouselImage2} alt="img" style={{width:"100%"}}/>

//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img src={ExampleCarouselImage2} alt="img" style={{width:"100%"}}/>
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img src={ExampleCarouselImage2} alt="img"style={{width:"100%"}} />
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default Carousel_main;

// import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage2 from '../Images/image2.png'; // Adjust the path according to your project structure
import "../App.scss"; // Custom styles for the carousel

function Carousel_main() {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img src={ExampleCarouselImage2} alt="First slide" className="carousel-image" />
          <div className="overlay"></div>
          <Carousel.Caption className="carousel-caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={ExampleCarouselImage2} alt="Second slide" className="carousel-image" />
          <div className="overlay"></div>
          <Carousel.Caption className="carousel-caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={ExampleCarouselImage2} alt="Third slide" className="carousel-image" />
          <div className="overlay"></div>
          <Carousel.Caption className="carousel-caption">
            <h3>Third slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousel_main;
