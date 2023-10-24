'use client';
import {Box, Container, InputAdornment, List, ListItemButton, ListItemText, TextField} from "@mui/material";
import {Filter, LocalOffer, SearchRounded} from "@mui/icons-material";
import React, {ChangeEventHandler, useEffect, useState} from "react";
import Fuse from "fuse.js";
import {useDataContext} from "@/global/DataProvider";
import {SearchItem, useSearchContext} from "@/components/search/SearchProvider";
import {useRouter} from "next/navigation";
import {stringToUrl} from "@/utils/stringManager";
import FilterProducts from "@/components/search/filter-products";

const fuseOptions = {
    includeScore: true,
    keys: ['name'],
};


const Search = () => {
    const router = useRouter();
    const {categories, products} = useDataContext();
    const {searchItem, setSearchItem} = useSearchContext();

    const [suggestions, setSuggestions] = useState<SearchItem[]>([]);

    const [inputText, setInputText] = useState('');
    const [suggestedItems, setSuggestedItems] = useState<SearchItem[]>([]);

    const fuse = new Fuse(suggestions, fuseOptions);

    useEffect(() => {
        if (categories && products) {
            setSuggestions([
                ...categories.map((category): SearchItem => ({
                    id: category.id,
                    name: category.name,
                    type: 'category'
                })),
                ...products.map((product): SearchItem => ({
                    id: product.id,
                    name: product.name,
                    type: 'product'
                }))
            ]);
        }
    }, [products, categories]);

    useEffect(() => {
        if (searchItem) {
            setInputText(searchItem.name);
        } else {
            setInputText('');
        }
    }, [searchItem]);

    const handleInputChange: ChangeEventHandler = ({target}) => {
        if (target instanceof HTMLInputElement) {
            setInputText(target.value);
            const closestMatches = fuse.search(target.value).map((result) => result.item).slice(0, 5);
            setSuggestedItems(closestMatches);
        }
    }

    const handleClickedItem = (event: React.MouseEvent<HTMLDivElement>, suggestion: SearchItem) => {
        setInputText(suggestion.name || '')
        setSuggestedItems([]);
        const storedObject = event.currentTarget.getAttribute('data-object');
        const parsedObject: SearchItem = JSON.parse(storedObject || '');
        if (parsedObject.type === 'category') {
            setSearchItem && setSearchItem(parsedObject);
            router.push(`/categoria/${stringToUrl(parsedObject.name)}`);
        }
    }

    return (
        <Container maxWidth={'sm'}
                   sx={{paddingTop: '1rem', paddingBottom: '1rem'}}>
            <Box sx={{position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <TextField
                    label={'Busca tu producto'}
                    color={'secondary'}
                    fullWidth
                    value={inputText}
                    onChange={handleInputChange}
                    variant={'filled'}
                    autoComplete={'off'}
                    sx={{
                        boxShadow: '0 .5rem 1rem rgba(0,0,0,0.15)',
                        '& .MuiInputBase-root': {
                            backgroundColor: 'white',
                        },
                        '& .MuiInputBase-root:hover': {
                            backgroundColor: 'white',
                        },
                        '& .MuiInputBase-root.Mui-focused': {
                            backgroundColor: 'white'
                        },
                        '& .MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error)::before': {
                            border: 'none',
                        },
                        '& .MuiInputBase-root::before': {
                            border: 'none',
                        },
                        '& .MuiInputBase-root::after': {
                            border: 'none',
                        },
                        '& .MuiInputBase-root .MuiSvgIcon-root': {
                            transition: 'color 0.1s ease-in-out',
                        },
                        '& .MuiInputBase-root.Mui-focused .MuiSvgIcon-root': {
                            color: 'secondary.main'
                        },
                        '& input': {
                            fontWeight: 500,
                        }
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position={'end'}>
                                <SearchRounded/>
                            </InputAdornment>
                        )
                    }}
                />
                {suggestedItems.length > 0 && (
                    <List sx={{
                        backgroundColor: 'white',
                        marginTop: '1rem',
                        position: 'absolute',
                        width: '100%',
                        top: '3.5rem',
                        zIndex: 1,
                        boxShadow: '0 .5rem 1rem rgba(0,0,0,0.15)',
                    }}>
                        {suggestedItems.map((suggestion, index) => (
                            <ListItemButton
                                key={index}
                                onClick={(e) => handleClickedItem(e, suggestion)}
                                data-object={JSON.stringify(suggestion)}
                                sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
                            >
                                <ListItemText primary={suggestion.name}></ListItemText>
                                {suggestion.type === 'category' && (
                                    <LocalOffer/>
                                )}
                            </ListItemButton>
                        ))}
                    </List>
                )}
            </Box>
            {searchItem && (
                <Box marginTop={'1rem'}>
                    <FilterProducts/>
                </Box>
            )}
        </Container>
    )
}

export default Search;