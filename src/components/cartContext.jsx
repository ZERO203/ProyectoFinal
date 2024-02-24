import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const productWithUniqueId = { ...product, uniqueId: Date.now() + Math.random() };
    
    setCartItems((prevItems) => [...prevItems, productWithUniqueId]);
    // setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (uniqueId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.uniqueId !== uniqueId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
