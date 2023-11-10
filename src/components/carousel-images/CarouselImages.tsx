'use client';
import {Carousel, CarouselItem} from "react-bootstrap";


import './customBootstrap.css';
import {Box, Button, Container, useMediaQuery} from "@mui/material";
import Image from "next/image";
import {useContext, useEffect, useState} from "react";
import {Check, ShoppingCart} from "@mui/icons-material";
import {useCartContext} from "@/components/cart/CartProvider";
import {useDataContext} from "@/global/DataProvider";
import {ProductLocal} from "@/api/models/product";
import theme from "@/theme/theme";

const ResponsiveImage = ({name, small, large}: { name: string, small: string, large: string }) => {
    const isMdUp = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
            {
                isMdUp ? (
                    <Image src={large}
                           alt={`Producto ${name}`} fill priority loading={'eager'}/>
                ) : (
                    <Image src={small}
                           alt={`Producto ${name}`} fill priority loading={'eager'}/>
                )
            }
        </>
    );
};

const CarouselImages = () => {
    const {products} = useDataContext();
    const [promotionalProducts, setPromotionalProducts] = useState<ProductLocal[]>([]);

    useEffect(() => {
        console.log(products);
        setPromotionalProducts(products?.filter((product) => product.isPromotional) || []);
    }, [products]);

    useEffect(() => {
        console.log(promotionalProducts);
    }, [promotionalProducts]);

    const {selectedProducts, setSelectedProducts, setIsOpen, setQuantityArray} = useCartContext();
    const [isAdded, setIsAdded] = useState(false);
    const [index, setIndex] = useState(0);

    const onSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    }

    const onAddProduct = () => {
        if (setSelectedProducts && !isAdded) {
            const product: ProductLocal = promotionalProducts[index];
            setSelectedProducts(prevState => [...prevState, product])
            setIsOpen && setIsOpen(true);
            setQuantityArray && setQuantityArray(prevState => [...prevState, 1])
        }
    }

    useEffect(() => {
        setIsAdded(selectedProducts?.find(product => product.id === promotionalProducts[index].id) !== undefined);
    }, [promotionalProducts, index, selectedProducts, isAdded]);

    // useEffect(() => {
    //     setCurrentId(promotionalProducts[index]?.id || 0);
    // }, [promotionalProducts, index]);
    //
    // useEffect(() => {
    //     console.log(currentId);
    // }, [currentId]);

    return (
        <Box sx={{position: 'relative'}}>
            <>
            <Carousel onSelect={onSelect}>
                {promotionalProducts.map((product) => {
                    const smallImage = product.photos[0]?.formatsPhotos.find(photo => photo.width === 600)?.src
                        || 'https://metroio.vtexassets.com/assets/vtex.file-manager-graphql/images/7270fca8-2a54-419a-b9f8-0259f75746cc___08043e30f3bb494ffb928227ff85e682.jpg';
                    const largeImage = product.photos[0]?.formatsPhotos.find(photo => photo.width === 1400)?.src
                        || 'https://metroio.vtexassets.com/assets/vtex.file-manager-graphql/images/77857f45-d809-4377-8ab4-254cb260daa7___a9f1ae6f67aaf6b9a55c9dfd3a9b5918.jpg';
                    return (
                        <CarouselItem interval={3000} key={product.id}>
                            <Box sx={{
                                width: '100%',
                                aspectRatio: '1/1',
                                position: 'relative',
                                "& img": {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    objectPosition: 'center',
                                    verticalAlign: 'bottom',
                                },
                                [theme.breakpoints.up('sm')]: {
                                    aspectRatio: '2.8/1',

                                }
                            }}>
                                <ResponsiveImage
                                    name={product.name}
                                    small={smallImage}
                                    large={largeImage}/>
                            </Box>
                        </CarouselItem>
                    )
                })}
            </Carousel>
            <Button color={isAdded ? 'green' : 'red'} variant={'contained'}
                    sx={{position: 'absolute', bottom: '0', zIndex: '1', left: '50%', transform: 'translateX(-50%)'}}
                    onClick={onAddProduct}
                    endIcon={isAdded ? <Check/> : <ShoppingCart/>}
            >
                {isAdded ? 'Añadido' : 'Agregar'}
            </Button>
            </>
        </Box>
    )
}
export default CarouselImages;