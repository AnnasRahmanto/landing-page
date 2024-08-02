import React from "react";
import Home from "../pages/home";
import AboutUs from "../pages/about Us";
import Contact from "../pages/contact";
import Gallery from "../pages/gallery";
import Services from "../pages/services";
import { Route, Routes } from "react-router-dom";

const publicRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

export default publicRouter;
