import React from "react";
import "./shop-page.scss";
import shopData from "../../shopData";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
function ShopPage() {
  return (
    <>
      <div className="shop_cover">
        <h1>Watch Shop</h1>
      </div>
      <div className="products_cover">
        {shopData.map((item) => (
          <SingleProduct key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default ShopPage;
