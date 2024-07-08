import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Nav_bar from "./components/Nav_bar";
import LoginPage from "./Pages/Login";
import Footer from "./components/Footer";
import Popservice from "./components/Popular_Service";
import AboutUs from "./Pages/About_Us";
import ContactUs from "./Pages/ContactUs";



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
        <Route path="/Navbar" element={<Nav_bar/>} />
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/popular_services" element={<Popservice/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
