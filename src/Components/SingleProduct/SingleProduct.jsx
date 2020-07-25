import React from "react";
import "./single-product.scss";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Cart/cartAction";
import { withRouter } from "react-router-dom";

function SingleProduct({ item, addToCart, history, match }) {
  const { product_name, price, product_img, id } = item;
  return (
    <div className="single_product_cover">
      <img
        src={product_img}
        alt={product_name}
        onClick={() => history.push(`shop/${id}`)}
      />
      <button onClick={() => addToCart(item)}>Add To Cart</button>
      <h3>{product_name}</h3>
      <p>$ {price}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(SingleProduct));
