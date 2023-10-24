'use client';
import {Box, Button, Card, CardActions, CardContent, Stack, Typography} from "@mui/material";
import Image from "next/image";
import {ProductLocal} from "@/api/models/product";
import React, {useEffect, useState} from "react";
import {Check, ShoppingCart} from "@mui/icons-material";
import {SearchItem} from "@/components/search/SearchProvider";
import {useCartContext} from "@/components/cart/CartProvider";
import Quantity from "@/components/cart/quantity";

interface ProductItemProps {
    product: ProductLocal;
}

const ProductItem = ({product}: ProductItemProps) => {
    const {selectedProducts, setSelectedProducts, quantityArray, setQuantityArray} = useCartContext();
    const {id, name, regularPrice, photos, salePrice, description, stock} = product;
    const image = photos[0]?.formatsPhotos?.find(photo => photo.width === 300)?.src
        || 'https://metroio.vtexassets.com/arquivos/ids/292318-1200-auto?v=638179318428870000&width=1200&height=auto&aspect=true';

    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        setIsAdded(selectedProducts?.find(product => product.id === id) !== undefined);
    }, [selectedProducts]);

    useEffect(() => {

    }, []);

    const onAddProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
        const storedObject = event.currentTarget.getAttribute('data-product');
        const product: ProductLocal = JSON.parse(storedObject || '');
        if (!isAdded) {
            setSelectedProducts && setSelectedProducts(prevState => [...prevState, product])
            setQuantityArray && setQuantityArray(prevState => [...prevState, 1])
        }
    }

    return (
        <Card>
            <Box sx={{position: 'relative', width: '100%', aspectRatio: '1/1'}}>
                <Image
                    src={image}
                    fill
                    alt={name}
                />
            </Box>
            <CardContent>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3rem',}}>
                    <Typography
                        align={"center"}
                        variant='h6'
                        component={'h3'}
                        sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {name}
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.5rem'}}>
                    <Typography
                        variant={'h5'}
                        component={'p'}
                        fontWeight={'medium'}
                        color={'text.secondary'}
                    >
                        S/ {(salePrice ? salePrice : regularPrice).toFixed(2)}
                    </Typography>

                    {salePrice !== regularPrice && (
                        <Typography
                            variant={'h6'}
                            component={'p'}
                            fontWeight={'medium'}
                            color={'red.main'}
                            sx={{textDecoration: 'line-through'}}
                        >
                            S/ {regularPrice.toFixed(2)}
                        </Typography>
                    )}
                </Box>
                <Box sx={{marginTop: '.5rem'}}>
                    <Typography
                        align={"center"}
                        variant='h6'
                        component={'p'}
                        sx={{
                            color: stock > 10 ? 'green.main' : 'red.main',
                        }}
                    >
                        {stock > 10 ? 'Más de 10 productos' : `¡Últimos ${stock}!`}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions sx={{padding: '0 1rem 1rem'}}>
                {!isAdded ? (
                    <Button
                        variant={'contained'}
                        color={isAdded ? 'green' : 'orange'}
                        fullWidth
                        endIcon={isAdded ? <Check/> : <ShoppingCart/>}
                        onClick={onAddProduct}
                        data-product={JSON.stringify(product)}
                    >
                        {isAdded ? 'Añadido' : 'Agregar'}
                    </Button>
                ) : (
                    <Box margin={'0 auto'}>
                        <Quantity productId={id}/>
                    </Box>
                )}
            </CardActions>
        </Card>
    )
}

export default ProductItem;