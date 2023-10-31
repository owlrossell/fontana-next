import {AppBar, Container, Drawer, Grid, IconButton, Stack, Typography} from "@mui/material";
import Image from "next/image";

import logo from '@/../public/shops.png';
import {Close} from "@mui/icons-material";
import Link from "next/link";
import {LateralMenuItem} from "@/components/header/lateral-menu/LateralMenuItem";
import {useSearchContext} from "@/components/search/SearchProvider";

interface LateralMenuProps {
    isActive: boolean,
    toggleMenu: () => void,
    lateralMenuItems: LateralMenuItem[],
}

const LateralMenu = ({isActive, toggleMenu, lateralMenuItems}: LateralMenuProps) => {
    const {setSearchItem} = useSearchContext();
    const handleClick = (item: LateralMenuItem) => {
        toggleMenu();
        setSearchItem && setSearchItem({
            id: item.id,
            name: item.name,
            type: 'category',
        });
    }
    return (
        <Drawer
            anchor={'left'}
            open={isActive}
            onClose={toggleMenu}
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
                        <Typography variant={'h5'}>Categorías</Typography>
                        <IconButton color={'inherit'} onClick={() => toggleMenu()}>
                            <Close/>
                        </IconButton>
                    </Stack>
                </Container>
            </AppBar>
            <Container sx={{
                marginTop: '1rem',
                '& a': {
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'inline-block',
                }
            }} maxWidth={'sm'}>
                <Grid container justifyItems={'center'}>
                    {lateralMenuItems.map((item) => (
                        <Grid key={item.id} xs={4} sm={3} textAlign={'center'}>
                            <Link href={item.url} onClick={()=>handleClick(item)}>
                                <IconButton>
                                    <Image
                                        src={item.icon || 'https://s3.amazonaws.com/orion-eat-app-files/buckets-prod%2FKP7AT2edxysP7oHxS-tambo-comidas.svg'}
                                        alt={'categoria'}
                                        width={48}
                                        height={48}
                                    />
                                </IconButton>
                                <Typography variant={'h6'} component={'p'}>{item.name}</Typography>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/*Vista de Lista*/}
            {/*<List sx={{*/}
            {/*    '> a': {*/}
            {/*        textDecoration: 'none',*/}
            {/*        color: 'inherit',*/}
            {/*    }*/}
            {/*}}>*/}
            {/*    {lateralMenuItems.map((item) => (*/}
            {/*        <Link href={item.url} key={item.id}>*/}

            {/*            <ListItem disablePadding>*/}
            {/*                <ListItemButton onClick={() => handleClick(item)}>*/}
            {/*                    <ListItemIcon>*/}
            {/*                        <LocalOffer/>*/}
            {/*                    </ListItemIcon>*/}
            {/*                    <ListItemText primary={item.name}/>*/}
            {/*                </ListItemButton>*/}
            {/*            </ListItem>*/}
            {/*        </Link>*/}
            {/*    ))}*/}
            {/*</List>*/}
        </Drawer>
    )
}

export default LateralMenu;