'use client';
import {createContext, useContext, useEffect, useState} from "react";
import {ProductLocal} from "@/api/models/product";

interface CartContextProps {
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
    useEffect(() => {
        console.log(quantityArray);
        console.log(selectedProducts);
    }, [quantityArray, selectedProducts]);

    return (
        <CartContext.Provider value={{selectedProducts, setSelectedProducts, quantityArray, setQuantityArray}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;