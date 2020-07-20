import React from "react";
import "./hero-section.scss";

function HeroSection() {
  return (
    <div className="hero_cover">
      <div className="left_hero_section">
        <div className="left_cover">
          <h2>Select Your New Perfect Style</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat is aute irure.
          </p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="right_hero_section">
        <div className="hero_img_cover">
          <img src="./assets/images/watch.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
