import { Minus, Plus } from 'lucide-react';
import React from 'react';
type QuantityControlProps = {
    id: number;
    quantity: number;
    updateQuantity: (id: number, quantity: number) => void;
}
const QuantityControl = ({ id, quantity, updateQuantity }: QuantityControlProps) => {

    const handleIncrease = () => {
        updateQuantity(id, quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            updateQuantity(id, quantity - 1);
        }
    };

    return (
        <div className='border border-black rounded-lg w-fit' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={handleDecrease} disabled={quantity === 0}
                className='disabled:bg-gray-200 disabled:cursor-pointer pointer-events-auto disabled:pointer-events-auto'><Minus /></button>
            <span className='text-lg'>{quantity}</span>
            <button onClick={handleIncrease}
                className='disabled:bg-gray-200 disabled:cursor-pointer pointer-events-auto disabled:pointer-events-auto '><Plus /></button>
        </div>
    );
};

export default QuantityControl;
