import {
    AppBar,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton, ListItemIcon, ListItemText,
    Stack,
    Typography
} from "@mui/material";
import Image from "next/image";

import logo from '@/../public/shops.png';
import {Close, LocalOffer} from "@mui/icons-material";
import Link from "next/link";
import {LateralMenuItem} from "@/components/header/lateral-menu/LateralMenuItem";
import {useFilterContext} from "@/global/FilterProvider";

interface LateralMenuProps {
    isActive: boolean,
    toggleMenu: () => void,
    lateralMenuItems: LateralMenuItem[],
}

const LateralMenu = ({isActive, toggleMenu, lateralMenuItems}: LateralMenuProps) => {
    const {setFilter} = useFilterContext();
    const handleClick = (item:LateralMenuItem) => {
        toggleMenu();
        setFilter && setFilter({
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
            <List sx={{
                '> a': {
                    textDecoration: 'none',
                    color: 'inherit',
                }
            }}>
                {lateralMenuItems.map((item) => (
                    <Link href={item.url} key={item.id}>
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>handleClick(item)}>
                                <ListItemIcon>
                                    <LocalOffer/>
                                </ListItemIcon>
                                <ListItemText primary={item.name}/>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
    )
}

export default LateralMenu;