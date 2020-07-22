import cartTypes from "./cartTypes";

export const addToCart = (item) => ({
  type: cartTypes.ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (item) => ({
  type: cartTypes.REMOVE_FROM_CART,
  payload: item,
});

export const itemToReduce = (item) => ({
  type: cartTypes.REDUCE_CART_ITEM,
  payload: item,
});
