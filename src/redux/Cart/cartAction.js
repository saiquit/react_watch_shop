import cartTypes from "./cartTypes";

export const addToCart = (item) => ({
  type: cartTypes.ADD_TO_CART,
  payload: item,
});
