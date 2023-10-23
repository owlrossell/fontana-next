'use client'
import {createContext, Dispatch, useContext, useState} from "react";

export interface Filter {
    id: number;
    name: string;
    type: string;
}

interface FilterContextProps {
    filter?: Filter | null;
    setFilter?: Dispatch<Filter | null>;
}

const FilterContext = createContext<FilterContextProps>({});

export const useFilterContext = () => {
    return useContext(FilterContext);
}

const FilterProvider = ({children}: any) => {
    const [filter, setFilter] = useState<Filter | null>(null);
    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterProvider;