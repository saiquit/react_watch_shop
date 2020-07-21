import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import shopData from "../../shopData";

import "./popular-item.scss";

function PopularItems() {
  return (
    <div className="popular_item_cover">
      <div className="text_cover">
        <h2>Popular Items</h2>
        <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida.
        </p>
      </div>

      <div className="single_cover">
        {shopData.map((item) => (
          <SingleProduct key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PopularItems;
