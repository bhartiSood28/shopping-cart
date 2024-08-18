'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ data }: any) {

    const actual_price = data?.price / (1 - data?.discountPercentage / 100)
    return (
        <Link href={`/${data?.id}`}>
            <div className=' w-full bg-white'>
                <div className='flex justify-center items-center'>
                    <Image src={data?.images[0]} alt={data?.title} width={234} height={50} className='object-contain h-[150px] text-center' />
                </div>

                <div>
                    <h3 className='font-semibold  min-h-12 text-center'>{data?.title}</h3>
                    <p className='text-xl'>${data?.price}
                        <span className='text-gray-400 text-sm'>  M.R.P</span>
                        <span className='line-through text-gray-400 text-sm'>{' '} ${actual_price.toFixed(2)}</span>
                        <span className='text-xs'> ({data?.discountPercentage}% off)</span>
                    </p>
                </div>

            </div>
        </Link>
    )
}
