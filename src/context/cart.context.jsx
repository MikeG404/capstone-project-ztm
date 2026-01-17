import { createContext, useState, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

export const CartProductContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemTocart: () => null,
  removeItemToCart: () => null,
  hardRemoveItemToCart: () => null,
  cartCount: 0,
  cartTotal: 0,
});

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, cartItems: payload };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};

export const CartProductProvider = ({ children }) => {
  const [{ cartItems, isCartOpen }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const setCartItems = (newCartItems) =>
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems));

  const setIsCartOpen = (bool) =>
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));

  const addItemTocart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const hardRemoveItemToCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };

  const cartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

  const cartTotal = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemTocart,
    removeItemToCart,
    hardRemoveItemToCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return (
    <CartProductContext.Provider value={value}>
      {children}
    </CartProductContext.Provider>
  );
};