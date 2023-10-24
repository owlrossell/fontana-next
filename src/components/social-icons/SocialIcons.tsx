'use client';
import {Box, IconButton, Stack} from "@mui/material";
import Link from "next/link";
import {FacebookOutlined, LocalPhone} from "@mui/icons-material";
import twitterImage from '@/../public/twitter.png';
import tiktokImage from '@/../public/tiktok.png';
import reclamacionesImage from '@/../public/reclamaciones.png';
import Image from "next/image";

const SocialIcons = () => {
    return (
        <Stack position={'fixed'} bottom={0}  bgcolor={'primary.main'} width={'100%'}
               justifyContent={'center'} height={'6rem'} alignItems={'center'}>
            <Stack gap={'.5rem'} direction={'row'}>
                <Link href={'https://www.facebook.com/BodegaLaFontana'} target={'_blank'}>
                    <IconButton sx={{color: 'rgb(8, 102, 255)'}}>
                        <FacebookOutlined sx={{fontSize: '2rem'}}/>
                    </IconButton>
                </Link>
                <Link href={'https://www.facebook.com/BodegaLaFontana'} target={'_blank'}>
                    <IconButton>
                        <Image src={twitterImage} alt={'twitter'}/>
                    </IconButton>
                </Link>
                <Link href={'https://www.facebook.com/BodegaLaFontana'} target={'_blank'}>
                    <IconButton>
                        <Image src={tiktokImage} alt={'twitter'}/>
                    </IconButton>
                </Link>
                <Link href={'tel:+51904335495'} target={'_blank'}>
                    <IconButton>
                        <LocalPhone sx={{fontSize: '2rem'}}/>
                    </IconButton>
                </Link>
            </Stack>
            <Box>
                <Link href={'https://www.consumidor.gob.pe/libro-de-reclamaciones'} target={'_blank'}>
                    <Image src={reclamacionesImage} alt={'Libro de reclamaciones'} height={32}/>
                </Link>
            </Box>
        </Stack>
    );
}

export default SocialIcons;