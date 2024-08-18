import React, { useContext, useState } from 'react';
import { cartItemsContext } from '../context/CartContext';
import QuantityControl from './ChangeQuantity';
import ProductCard from './ProductCard';
import DeleteItem from './DeleteItem';

const Cart = ({ data }: any) => {

    const { setCartItems } = useContext(cartItemsContext);


    const updateQuantity = (id: number, newQuantity: number) => {
        setCartItems((prevItems: any) =>
            prevItems.map((item: any) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    return (
        <div className='border border-black p-2 bg-white'>
            <ProductCard data={data} />
            <div className='flex gap-1 items-center mt-2'>
                <QuantityControl id={data?.id} quantity={data?.quantity} updateQuantity={updateQuantity} />
                <DeleteItem id={data?.id} />
            </div>

        </div>
    );
};

export default Cart;
