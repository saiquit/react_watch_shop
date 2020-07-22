import React, { useState, useEffect } from "react";
import "./shop-page.scss";
import shopData from "../../shopData";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
function ShopPage() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    setWatches(shopData);
  }, []);

  const sortByPrice = () => {
    setWatches((state) => state.slice(0).sort((a, b) => b.price - a.price));
  };

  return (
    <>
      <div className="shop_cover">
        <h1>Watch Shop</h1>
      </div>
      <div className="filters">
        <button onClick={sortByPrice}>Price High To Low</button>
        <button onClick={sortByPrice}>Most Popular</button>
      </div>
      <div className="products_cover">
        {watches.map((item) => (
          <SingleProduct key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default ShopPage;
