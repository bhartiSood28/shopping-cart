import React, { useContext } from 'react'
import { cartItemsContext } from '../context/CartContext';
import { Trash } from 'lucide-react';

export default function DeleteItem({ id }: { id: number }) {

    const { setCartItems } = useContext(cartItemsContext)
    const handleDelete = (id: number) => {
        setCartItems((prevItems: any) => prevItems.filter((item: any) => item.id !== id));
    };
    return (
        <button onClick={() => handleDelete(id)}><Trash /></button>
    )
}
