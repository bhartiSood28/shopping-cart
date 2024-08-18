'use client';
import React, { useContext } from 'react';
import { cartItemsContext } from '../context/CartContext';
import Cart from '../_components/CartItem';

export default function page() {
    const { cartItems } = useContext(cartItemsContext)

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-gray-400 to-gray-200'>
            {/* <div>My cart</div> */}
            <div className='grid grid-cols-4 gap-4'>
                {cartItems?.map((item: any) => {
                    return (<Cart key={item?.id} data={item} />)
                })}
            </div>
        </main>

    )
}
