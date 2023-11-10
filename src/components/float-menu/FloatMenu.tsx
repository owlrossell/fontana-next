import Link from "next/link";
import {IconButton, Stack, useMediaQuery} from "@mui/material";
import {FacebookOutlined, LocalPhone} from "@mui/icons-material";
import Image from "next/image";
import twitterImage from "../../../public/twitter.png";
import tiktokImage from "../../../public/tiktok.png";
import reclamacionesImage from "../../../public/reclamaciones.png";
import theme from "@/theme/theme";
import {useEffect} from "react";

const FloatMenu = () => {
    const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
    useEffect(() => {
        console.log(isLgUp);
    }, [isLgUp]);
    return (
        <Stack position={'fixed'} gap={'.5rem'} direction={'column'} sx={{transform: 'translateX(-4rem)'}} bottom={'4rem'}>
            <Link href={'https://www.facebook.com/lafontanamarketmatucana'} target={'_blank'}>
                <IconButton sx={{color: 'rgb(8, 102, 255)'}}>
                    <FacebookOutlined sx={{fontSize: '2rem'}}/>
                </IconButton>
            </Link>
            <Link href={'https://www.facebook.com/lafontanamarketmatucana'} target={'_blank'}>
                <IconButton>
                    <Image src={twitterImage} alt={'twitter'}/>
                </IconButton>
            </Link>
            <Link href={'https://www.facebook.com/lafontanamarketmatucana'} target={'_blank'}>
                <IconButton>
                    <Image src={tiktokImage} alt={'twitter'}/>
                </IconButton>
            </Link>
            <Link href={'tel:+51935797813'} target={'_blank'}>
                <IconButton>
                    <LocalPhone sx={{fontSize: '2rem'}}/>
                </IconButton>
            </Link>
            <Link href={'https://www.consumidor.gob.pe/libro-de-reclamaciones'} target={'_blank'}>
                <IconButton>
                    <Image src={reclamacionesImage} alt={'Libro de reclamaciones'} height={32}/>
                </IconButton>
            </Link>
        </Stack>
    )
}

export default FloatMenu;