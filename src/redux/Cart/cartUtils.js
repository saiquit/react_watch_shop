export const addToCart = (cartItems, itemToAdd) => {
  const existingitem = cartItems.find((item) => item.id === itemToAdd.id);
  if (existingitem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeFromCart = (cartItems, itemsToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemsToRemove.id);
};

export const reduceFromCart = (cartItems, itemToReduce) => {
  const existingitem = cartItems.find((item) => item.id === itemToReduce.id);
  if (existingitem.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToReduce.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem,
    );
  }
  return removeFromCart(cartItems, itemToReduce);
};
