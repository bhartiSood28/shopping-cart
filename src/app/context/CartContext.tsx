'use client'
import React, { createContext, useState } from 'react';

const cartItemsContext = createContext({
    cartItems: [],
    setCartItems: (value: any) => { },
});

const CartItemsProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <cartItemsContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </cartItemsContext.Provider>
    );
};

export { cartItemsContext, CartItemsProvider };