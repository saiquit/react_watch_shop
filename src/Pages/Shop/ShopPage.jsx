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
        {shopData.map(({ id, ...otherProps }) => (
          <SingleProduct key={id} {...otherProps} />
        ))}
      </div>
    </>
  );
}

export default ShopPage;
