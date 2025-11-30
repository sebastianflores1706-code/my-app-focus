import React, { createContext, useContext, useState } from "react";

export interface Producto {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface CartContextType {
  cart: Producto[];
  addToCart: (p: Producto) => void;
  removeFromCart: (id: string) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<Producto[]>([]);

  const addToCart = (producto: Producto) => {
    setCart((prev) => [...prev, producto]);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext) as CartContextType;
};
