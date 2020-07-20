import React from "react";

import HeroSection from "../../Components/Hero/HeroSection";
import NewArrivalSection from "../../Components/NewArrival/NewArrival";
import PopularItems from "../../Components/PopularItems/PopularItems";

function Home() {
  return (
    <div>
      <HeroSection />
      <NewArrivalSection />
      <PopularItems />
    </div>
  );
}

export default Home;
