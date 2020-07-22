import { addToCart, removeFromCart, reduceFromCart } from "./cartUtils";
import cartTypes from "./cartTypes";
const INITIAL_STATE = {
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        cart: addToCart(state.cart, action.payload),
      };
    case cartTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: removeFromCart(state.cart, action.payload),
      };
    case cartTypes.REDUCE_CART_ITEM:
      return {
        ...state,
        cart: reduceFromCart(state.cart, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
