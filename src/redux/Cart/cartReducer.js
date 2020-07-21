import cartType from "./cartTypes";
import { addToCart } from "./cartUtils";
const INITIAL_STATE = {
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartType.ADD_TO_CART:
      return {
        ...state,
        cart: addToCart(state.cart, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
