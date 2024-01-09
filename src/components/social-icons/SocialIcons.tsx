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
        <Stack bottom={0} bgcolor={'primary.main'} width={'100%'}
               justifyContent={'center'} height={'4rem'} alignItems={'center'} gap={'1rem'}>
            <Stack direction={'row'} alignItems={'center'} gap={'.5rem'}>
                <Typography color={'primary.contrastText'}>Paga con:</Typography>
                <Image src={yapeImage} alt={'yape'} height={32}/>
                <Image src={plinImage} alt={'plin'} height={32}/>
                <Image src={izipayImage} alt={'izipay'} height={24}/>
                <Typography color={'primary.contrastText'}>Design by <a href="https://devsolutionsa.com/">Devsolutionsa</a></Typography>
            </Stack>
        </Stack>
    );
}

export default SocialIcons;