"use client";

import "./globals.css";

import React, { createContext, useContext, useState } from 'react';
import { SessionProvider } from 'next-auth/react';

const CartContext = createContext();


export const useCart = () => {
    return useContext(CartContext);
};


export default function RootLayout({ children }) {

  const [cart, setCart] = useState([]) ;

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]) ;
};

  return (
    <html lang="en">
      
      <body
        className={'sans'}
      >
        <SessionProvider>
        <CartContext.Provider value={{ cart, addToCart }}>
        {children}
        </CartContext.Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
