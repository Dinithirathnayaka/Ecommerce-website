import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import ProductSection from "../ProductSection/ProductSection";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

function Main() {
  return (
    <div>
      <Navbar />
      <Slider />
      <NavigateButtons />
      <ProductSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
