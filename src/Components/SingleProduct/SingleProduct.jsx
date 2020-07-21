import React from "react";
import "./single-product.scss";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Cart/cartAction";

function SingleProduct({ item, addToCart }) {
  const { product_name, price, product_img } = item;
  return (
    <div className="single_product_cover">
      <img src={product_img} alt={product_name} />
      <button onClick={() => addToCart(item)}>Add To Cart</button>
      <h3>{product_name}</h3>
      <p>$ {price}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(SingleProduct);
