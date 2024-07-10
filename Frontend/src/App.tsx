import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Nav_bar from "./components/Nav_bar";
import LoginPage from "./Pages/Login";
import Footer from "./components/Footer";
import Popservice from "./components/Popular_Service";
import AboutUs from "./Pages/About_Us";
import ContactUs from "./Pages/ContactUs";
import FAQS from "./Pages/FAQS";
import GamingAccessories from "./Pages/Gaming_accessories";
import CustomerReviews from "./Pages/CustomerReview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Navbar" element={<Nav_bar />} />
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/popular_services" element={<Popservice />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/gamingaccessories" element={<GamingAccessories />} />
        <Route path="/CustomerReview" element={<CustomerReviews />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
