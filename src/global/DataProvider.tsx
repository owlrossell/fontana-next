'use client';
import {createContext, useContext, useEffect, useState} from "react";
import {CategoryLocal} from "@/api/models/category";
import {getAllCategories} from "@/api/category";
import {ProductLocal} from "@/api/models/product";
import {getAllProducts} from "@/api/product";

interface DataContextProps {
    categories?: CategoryLocal[];
    products?: ProductLocal[];
}

const DataContext = createContext<DataContextProps>({});

export const useDataContext = () => {
    return useContext(DataContext);
}

const DataProvider = ({children}: any) => {
    const [categories, setCategories] = useState<CategoryLocal[]>([]);
    const [products, setProducts] = useState<ProductLocal[]>([])

    useEffect(() => {
        getAllCategories().then((categories) => {
            setCategories(categories);
        });
        getAllProducts().then((products) => {
            setProducts(products);
        });
    }, []);
    return (
        <DataContext.Provider value={{categories, products}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;