import Navbar from "../components/Nav_bar";
import Container from "react-bootstrap/Container";
import Carousel_main from "../components/Main_Carousel";
import Services from "../components/Services";

function Home() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <Container>
        <Carousel_main />
        <Services/>
      </Container>
    </div>
  );
}

export default Home;
