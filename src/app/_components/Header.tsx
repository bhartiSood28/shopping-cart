'use client';
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React, { useContext } from 'react'
import { cartItemsContext } from '../context/CartContext'

export default function Header() {
    const { cartItems } = useContext(cartItemsContext)
    return (
        <header className="flex justify-between items-center w-full px-4 py-4 bg-gradient-to-l from-blue-950 to-blue-600">
            <Link href={`/`}> <h1 className="text-3xl">Shopping</h1></Link>
            <Link href={'/cart'}><div className='relative '><ShoppingCart color='white' size={30} />
                <span className='absolute -top-[1.5px] -right-1 bg-red-600 text-white text-xs h-4 rounded-full w-3 text-center'>{cartItems?.length}</span></div></Link>
        </header>
    )
}
