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
