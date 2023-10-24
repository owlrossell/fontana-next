'use client'
import {createContext, useContext, useState} from "react";

export interface SearchItem {
    id: number;
    name: string;
    type: string;
}

interface SearchContextProps {
    searchItem?: SearchItem | null;
    setSearchItem?: React.Dispatch<React.SetStateAction<SearchItem | null>>;
}

const SearchContext = createContext<SearchContextProps>({});

export const useSearchContext = () => {
    return useContext(SearchContext);
}

const SearchProvider = ({children}: any) => {
    const [searchItem, setSearchItem] = useState<SearchItem | null>(null);
    return (
        <SearchContext.Provider value={{searchItem, setSearchItem}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;