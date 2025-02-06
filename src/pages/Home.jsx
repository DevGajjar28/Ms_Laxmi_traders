import React from "react";
import FAQ from "../Components/FAQ";
import FeatureHighlights from "../Components/FeatureHighlights";
import LandingPage from "../Components/LandinPage";
import OurProducts from "../Components/OurProducts";
import Testimonial from "../Components/Testimonial";

function Home() {
  return (
    <div>
      <LandingPage />
      <OurProducts />
      <FeatureHighlights />
      <Testimonial />
      <FAQ />
    </div>
  );
}

export default Home;
