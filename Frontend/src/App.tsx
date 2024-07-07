import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Nav_bar from "./components/Nav_bar";
import LoginPage from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Navbar" element={<Nav_bar />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
