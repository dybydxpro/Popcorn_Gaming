
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Images/logo.png";
import "../App.scss";

function Nav_bar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          <a href="https://example.com">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </a>
          <span className="brand-text">PoPcorn Gaming</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#Services" className="nav-link">
              Services
            </Nav.Link>
            <Nav.Link href="#AboutUs" className="nav-link">
              About Us
            </Nav.Link>
            <Nav.Link href="#ContactUs" className="nav-link">
              Contact Us
            </Nav.Link>
            <NavDropdown
              title="Services"
              id="collasible-nav-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item href="#action3">
                Popular Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Gaming Components
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login" className="nav-link sign-in">
              Sign in / Explore Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default  Nav_bar;
