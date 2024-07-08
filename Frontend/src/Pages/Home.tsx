import Navbar from "../components/Nav_bar";
import Container from "react-bootstrap/Container";
import Carousel_main from "../components/Main_Carousel";
import Services from "../components/Services";
import Popular_Service from "../components/Popular_Service";
import Customer_review from "../components/Customer_review"
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <Container>
        <Carousel_main />
        <br />
        <Services />
        <br />
        <Popular_Service />
        <br />
        <Customer_review/>
        <br />
        <Footer/>
      </Container>
    </div>
  );
}

export default Home;
