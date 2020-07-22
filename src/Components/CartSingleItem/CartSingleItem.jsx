import React from "react";
import "./cart-single.scss";
import { connect } from "react-redux";
import {
  removeFromCart,
  itemToReduce,
  addToCart,
} from "../../redux/Cart/cartAction";

function CartSingleItem({ item, removeItem, reduceItem, addToCart }) {
  const { product_name, price, product_img, quantity } = item;
  return (
    <>
      <div className="cart_item_cover">
        <div className="product_img">
          <img src={product_img} alt={product_name} />
        </div>
        <div className="cart_details">
          <span className="remove_button" onClick={() => removeItem(item)}>
            X
          </span>
          <h3>{product_name}</h3>
          <p>
            <span className="quantity_btn" onClick={() => reduceItem(item)}>
              &#10092;
            </span>
            <span>
              {quantity}
              <span className="quantity_btn" onClick={() => addToCart(item)}>
                &#10093;
              </span>
              X{" "}
            </span>
            $ {price}
          </p>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeFromCart(item)),
  reduceItem: (item) => dispatch(itemToReduce(item)),
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(CartSingleItem);
