import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import Footer from "../Components/Footer";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const Routers = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Routers;
