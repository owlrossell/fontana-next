'use client';
import {AppBar, Box, Button, Card, Container, Drawer, IconButton, List, Stack, Typography} from "@mui/material";
import Image from "next/image";

import logo from '@/../public/shops.png';
import {AddCircle, Cancel, Close, RemoveCircle, WhatsApp} from "@mui/icons-material";
import {LateralMenuItem} from "@/components/header/lateral-menu/LateralMenuItem";
import {useCartContext} from "@/components/cart/CartProvider";
import Quantity from "@/components/cart/quantity";
import Link from "next/link";
import {useEffect, useState} from "react";

const Cart = () => {
    const {
        isOpen,
        setIsOpen,
        selectedProducts,
        setSelectedProducts,
        quantityArray,
        setQuantityArray,
    } = useCartContext();

    const phoneNumber = '51904335495';
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [url, setUrl] = useState('');

    useEffect(() => {
        const newTotal: number = selectedProducts?.reduce((prev, current, index) => {
            return prev + current.salePrice * (quantityArray ? quantityArray[index] : 0);
        }, 0) || 0;
        setTotalPrice(newTotal);
    }, [selectedProducts, quantityArray]);

    const updateUrl = () => {
        let messageString = 'Hola, buen día quisiera ordenar:'
        selectedProducts?.forEach((product, index) => {
            messageString += `\n${quantityArray ? quantityArray[index] : 0} x ${product.name} -> S/ ${(product.salePrice * (quantityArray ? quantityArray[index] : 0)).toFixed(2)}`
        });
        messageString += `\nTotal: S/ ${totalPrice?.toFixed(2)}`
        setUrl(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(messageString)}`)
    }

    const onRemoveItem = (productId: number) => {
        const currentIndex = selectedProducts?.findIndex((product) => product.id === productId) || 0;
        setQuantityArray && setQuantityArray((prevArray) => {
            const newArray = [...prevArray];
            newArray.splice(currentIndex, 1);
            return newArray;
        });
        setSelectedProducts && setSelectedProducts((prevArray) => {
            const newArray = [...prevArray];
            newArray.splice(currentIndex, 1);
            return newArray;
        });
    }
    return (
        <Drawer
            anchor={'right'}
            open={isOpen}
            onClose={() => setIsOpen && setIsOpen(false)}
        >
            <AppBar
                position={'static'}
                sx={{width: '100vw', maxWidth: '37.5rem'}}
            >
                <Container>
                    <Stack
                        direction={'row'}
                        height={'4rem'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Image src={logo} alt={'Logo - La Fontana'} width={40}/>
                        <Typography variant={'h5'}>Carrito de compras</Typography>
                        <IconButton color={'inherit'} onClick={() => setIsOpen && setIsOpen(false)}>
                            <Close/>
                        </IconButton>
                    </Stack>
                </Container>
            </AppBar>
            <List>
                <Container>
                    <Stack direction={'column-reverse'}>
                        {selectedProducts?.length !== 0 && (
                            <Box display={'flex'} flexDirection={'column-reverse'} width={'100%'}
                                 alignItems={'stretch'}>
                                <Link href={url} target={'_blank'} style={{alignSelf: 'center'}}>
                                    <Button color={'orange'} variant={'contained'} sx={{marginTop: '1rem'}}
                                            onClick={updateUrl}
                                    >
                                        <Stack direction={'row'} gap={'.5rem'}>
                                            Comprar
                                            <WhatsApp/>
                                        </Stack>
                                    </Button>
                                </Link>
                                <Stack direction={'row'} justifyContent={'space-between'} marginTop={'1rem'}>
                                    <Typography>Total</Typography>
                                    <Typography variant={'h5'}
                                                color={'text.primary'}>S/ {totalPrice?.toFixed(2)}</Typography>
                                </Stack>

                            </Box>
                        )}
                        {selectedProducts && selectedProducts.length > 0 && selectedProducts.map((product, index) => {
                            const currentIndex = selectedProducts?.findIndex((productA) => productA.id === product.id) || 0;
                            const parcialPrice = product.salePrice * (quantityArray ? quantityArray[currentIndex] : 0);
                            const fakePrice = product.regularPrice * (quantityArray ? quantityArray[currentIndex] : 0);
                            return (
                                <Card variant={'outlined'} key={product.id}
                                      sx={{
                                          borderRadius: '0',
                                          backgroundColor: index + 1 === selectedProducts?.length ? 'primary.light' : 'transparent',
                                          padding: '1rem 0',
                                          border: '0 solid transparent',
                                          borderBottomWidth: '1px',
                                          borderColor: 'graySpace.main',
                                      }}
                                >
                                    <Stack direction={'row'} alignItems={'start'} justifyContent={'space-between'}>
                                        <Stack direction={'row'} gap={'1rem'}>
                                            <Stack position={'relative'} width={'6rem'} height={'6rem'}>
                                                <Image
                                                    src={product.photos[0].formatsPhotos.find((photo) => photo.width === 300)?.src || 'https://metroio.vtexassets.com/arquivos/ids/292318-1200-auto?v=638179318428870000&width=1200&height=auto&aspect=true'}
                                                    alt={'product'} fill/>
                                            </Stack>
                                            <Stack direction={'column'} gap={'.5rem'} flex={1}>
                                                <Typography
                                                    align={"left"}
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
                                                    {product.name}
                                                </Typography>

                                                <Stack direction={'row'} gap={'.5rem'} alignItems={'center'}>
                                                    <Typography
                                                        variant={'h5'}
                                                        component={'p'}
                                                        fontWeight={'medium'}
                                                        color={'text.secondary'}
                                                    >
                                                        S/ {parcialPrice.toFixed(2)}
                                                    </Typography>
                                                    {product.salePrice !== product.regularPrice && (
                                                        <Typography
                                                            variant={'h6'}
                                                            component={'p'}
                                                            fontWeight={'medium'}
                                                            color={'red.main'}
                                                            sx={{textDecoration: 'line-through'}}
                                                        >
                                                            S/ {fakePrice.toFixed(2)}
                                                        </Typography>
                                                    )}
                                                </Stack>

                                                <Quantity productId={product.id}/>
                                            </Stack>
                                        </Stack>
                                        <IconButton color={'red'} onClick={() => onRemoveItem(product.id)}>
                                            <Cancel/>
                                        </IconButton>
                                    </Stack>
                                </Card>
                            )
                        })}
                        {selectedProducts?.length === 0 && (
                            <Typography textAlign={'center'} sx={{marginTop: '2rem'}}>Aun no hay productos en tu
                                carrito</Typography>
                        )}
                    </Stack>
                </Container>
            </List>
        </Drawer>
    )
}

export default Cart;