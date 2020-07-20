import cartType from "./cartTypes";
const INITIAL_STATE = {
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartType.ADD_TO_CART:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default cartReducer;
