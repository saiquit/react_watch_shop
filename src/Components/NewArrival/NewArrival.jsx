import React from "react";
import SingleArrival from "./SingleArrival";
import "./new-arrival.scss";

const newArrival = [
  {
    id: 1,
    product_name: "Thermo Ball Etip Gloves",
    price: 47.99,
    img: "https://i.ibb.co/MhkhBth/new-product3.png",
  },
  {
    id: 2,
    product_name: "Thermo Ball Etip Gloves",
    price: 47.99,
    img: "https://i.ibb.co/GkDVmL1/new-product1.png",
  },
  {
    id: 3,
    product_name: "Thermo Ball Etip Gloves",
    price: 47.99,
    img: "https://i.ibb.co/yRqKKFp/new-product2.png",
  },
];

function NewArrival() {
  return (
    <div className="arrival_cover">
      <h1>New Arrivals</h1>
      <div className="single_cover">
        {newArrival.map(({ ...otherprops }, index) => (
          <SingleArrival key={index} {...otherprops} />
        ))}
      </div>
    </div>
  );
}

export default NewArrival;
