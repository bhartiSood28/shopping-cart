'use client'
import React, { useContext } from 'react'
import { cartItemsContext } from '../context/CartContext'
import { toast } from 'sonner'

export default function AddToCartButton({ data }: any) {
    console.log(data, 'data cart items')
    const { setCartItems } = useContext(cartItemsContext)
    const handleClick = () => {
        setCartItems((prevItems: any) => {

            const itemExists = prevItems.find((item: any) => item.id === data?.id);

            if (itemExists) {

                return prevItems.map((item: any) =>
                    item.id === data?.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {

                return [...prevItems, {
                    id: data?.id,
                    title: data?.title,
                    price: data?.price,
                    discountPercentage: data?.discountPercentage,
                    quantity: 1,
                    images: data?.images,
                }];
            }
        });

        toast('Added to cart successfully!')
    };


    return (
        <button onClick={handleClick} className="border p-2 w-full mx-auto bg-[#0000BF] text-white rounded-md mt-1">Add to Cart</button>
    )
}
