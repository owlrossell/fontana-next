'use client';

import React, {FunctionComponent, useState} from "react";
import {AppBar, Badge, Container, IconButton, Stack} from "@mui/material";

import {Menu, ShoppingCart} from '@mui/icons-material';
import Image from "next/image";

import logo from '@/../public/logo.svg';
import logoStore from '@/../public/shops.png';
import Link from "next/link";
import {useDataContext} from "@/global/DataProvider";
import LateralMenu from "@/components/header/lateral-menu";
import {LateralMenuItem} from "@/components/header/lateral-menu/LateralMenuItem";
import {stringToUrl} from "@/utils/stringManager";
import {useCartContext} from "@/components/cart/CartProvider";
import Cart from "@/components/cart";

const Header: FunctionComponent = () => {
    const {categories} = useDataContext();
    const {selectedProducts, setIsOpen} = useCartContext();

    const lateralMenuItems: LateralMenuItem[] = categories?.map((category): LateralMenuItem => ({
        id: category.id,
        name: category.name,
        url: `/categoria/${stringToUrl(category.name)}`,
        icon : category.icon,
    })) || [];

    // const phoneNumber = '51904335495';
    const [isMenuActive, setIsMenuActive] = useState(false);
    // const [categories, setCategories] = useState([]);

    // const {
    //     selectedProducts,
    //     totalPrice,
    //     isCartOpen,
    //     setIsCartOpen,
    //     arrayMessage,
    //     setSearchItem,
    //     setFilter
    // } = useContext(CartContext);
    // const [url, setUrl] = useState('');

    const toggleMenu = () => {
        setIsMenuActive((prevState) => !prevState);
    }

    // const toggleCart = () => {
    //     setIsCartOpen && setIsCartOpen((prevState) => !prevState);
    // }

    // const onHandleMenuItem = (event: React.MouseEvent<HTMLDivElement>) => {
    //     const storedObject = event.currentTarget.getAttribute('data-object');
    //     const parsedObject = JSON.parse(storedObject || '');
    //     // setSearchItem && setSearchItem({id: parsedObject.id, name: parsedObject.name, type: 'category'});
    //     // setFilter && setFilter(parsedObject.name);
    //     toggleMenu();
    // }

    // useEffect(() => {
    //     let messageString = 'Hola, buen día quisiera ordenar:'
    //     arrayMessage?.forEach((message) => {
    //         messageString += `\n${message}`
    //     })
    //     messageString += `\nTotal: S/ ${totalPrice?.toFixed(2)}`
    //     setUrl(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(messageString)}`)
    // }, [arrayMessage, setUrl, totalPrice]);
    //
    // useEffect(() => {
    //     getAllCategoriesLite().then((categories) => {
    //         setCategories(categories);
    //     });
    // }, []);


    return (
        <>
            <AppBar>
                <Container>
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        height={'4rem'}
                        alignItems={'center'}
                    >
                        <IconButton onClick={toggleMenu}>
                            <Menu/>
                        </IconButton>
                        <Link href={'/'}>
                            <Stack direction={'row'} gap={'1rem'} alignItems={'center'}>
                                <Image src={logoStore} alt={'logo ícono'} width={40}/>
                                <Image src={logo} alt={'logo'}/>
                            </Stack>
                        </Link>
                        <IconButton onClick={()=>setIsOpen && setIsOpen(true)}>
                            {selectedProducts && selectedProducts?.length > 0 ? (
                                <Badge badgeContent={selectedProducts.length} color={'red'}>
                                    <ShoppingCart/>
                                </Badge>
                            ) : (
                                <ShoppingCart/>
                            )}
                        </IconButton>
                    </Stack>
                </Container>
                {/*<LateralMenu*/}
                {/*    isActive={isMenuActive}*/}
                {/*    onCloseMenu={toggleMenu}*/}
                {/*    title={'Menu Principal'}*/}
                {/*    unmountOnExit*/}
                {/*>*/}
                {/*    {categories.length > 0 && categories.map((category:any, index) => (*/}
                {/*        <LateralMenuItem key={category.id || index}>*/}
                {/*            <Stack direction={"row"} gap={'.5rem'} sx={{cursor: 'pointer'}} onClick={onHandleMenuItem}*/}
                {/*                   data-object={JSON.stringify(category)}>*/}
                {/*                <Tag/>*/}
                {/*                <Typography fontWeight={"bold"}>{category.name || ''}</Typography>*/}
                {/*            </Stack>*/}
                {/*        </LateralMenuItem>*/}
                {/*    ))}*/}
                {/*</LateralMenu>*/}


                {/*<LateralMenu*/}
                {/*    isActive={isCartOpen}*/}
                {/*    onCloseMenu={toggleCart}*/}
                {/*    title={'Carrito de Compras'}*/}
                {/*    isLeft*/}
                {/*    unmountOnExit={false}*/}
                {/*>*/}
                {/*    <Container>*/}
                {/*        <Box display={'flex'} flexDirection={'column-reverse'} width={'100%'} alignItems={'stretch'}>*/}
                {/*            {selectedProducts?.length !== 0 && (*/}
                {/*                <>*/}
                {/*                    <Link href={url} target={'_blank'} style={{alignSelf: 'center'}}>*/}
                {/*                        <Button color={'orange'} variant={'contained'} sx={{marginTop: '1rem'}}>*/}
                {/*                            <Stack direction={'row'} gap={'.5rem'}>*/}
                {/*                                Comprar*/}
                {/*                                <WhatsApp/>*/}
                {/*                            </Stack>*/}
                {/*                        </Button>*/}
                {/*                    </Link>*/}
                {/*                    <Stack direction={'row'} justifyContent={'space-between'} marginTop={'1rem'}>*/}
                {/*                        <Typography>Total</Typography>*/}
                {/*                        <Typography variant={'h5'}*/}
                {/*                                    color={'text.primary'}>S/ {totalPrice?.toFixed(2)}</Typography>*/}
                {/*                    </Stack>*/}
                {/*                </>*/}
                {/*            )}*/}
                {/*            {selectedProducts?.length !== 0 && selectedProducts?.map((selectedProduct, index) => (*/}
                {/*                <CartItem key={selectedProduct.id} productItem={selectedProduct} index={index}/>*/}
                {/*            ))}*/}
                {/*            {selectedProducts?.length === 0 && (*/}
                {/*                <Typography textAlign={'center'} sx={{marginTop: '2rem'}}>Aun no hay productos en tu*/}
                {/*                    carrito</Typography>*/}
                {/*            )}*/}
                {/*        </Box>*/}
                {/*    </Container>*/}
                {/*</LateralMenu>*/}

            </AppBar>
            <LateralMenu
                isActive={isMenuActive}
                toggleMenu={toggleMenu}
                lateralMenuItems={lateralMenuItems}
            />
            <Cart/>
        </>
    );
};

export default Header;