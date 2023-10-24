'use client';
import {createContext, useContext, useEffect, useState} from "react";
import {ProductLocal} from "@/api/models/product";

interface CartContextProps {
    isOpen?: boolean;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    selectedProducts?: ProductLocal[];
    setSelectedProducts?: React.Dispatch<React.SetStateAction<ProductLocal[]>>;
    quantityArray?: number[];
    setQuantityArray?: React.Dispatch<React.SetStateAction<number[]>>;
}

const CartContext = createContext<CartContextProps>({});

export const useCartContext = () => {
    return useContext(CartContext);
}
const CartProvider = ({children}: {children: React.ReactNode}) => {
    const [quantityArray, setQuantityArray] = useState<number[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<ProductLocal[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <CartContext.Provider value={{
            selectedProducts,
            setSelectedProducts,
            quantityArray,
            setQuantityArray,
            isOpen,
            setIsOpen,

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;