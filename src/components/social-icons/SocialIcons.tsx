'use client';
import {Box, IconButton, Stack, Typography} from "@mui/material";
import Link from "next/link";
import {FacebookOutlined, LocalPhone} from "@mui/icons-material";
import twitterImage from '@/../public/twitter.png';
import tiktokImage from '@/../public/tiktok.png';
import reclamacionesImage from '@/../public/reclamaciones.png';

import yapeImage from '@/../public/yape.png';
import plinImage from '@/../public/plin.png';
import izipayImage from '@/../public/izipay.png';

import Image from "next/image";

const SocialIcons = () => {
    return (
        <Stack position={'fixed'} bottom={0} bgcolor={'primary.main'} width={'100%'}
               justifyContent={'center'} height={'8rem'} alignItems={'center'} gap={'1rem'}>
            <Stack gap={'.5rem'} direction={'row'}>
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
            <Stack direction={'row'} alignItems={'center'} gap={'.5rem'}>
                <Typography color={'primary.contrastText'}>Paga con:</Typography>
                <Image src={yapeImage} alt={'yape'} height={32}/>
                <Image src={plinImage} alt={'plin'} height={32}/>
                <Image src={izipayImage} alt={'izipay'} height={24}/>
            </Stack>
        </Stack>
    );
}

export default SocialIcons;