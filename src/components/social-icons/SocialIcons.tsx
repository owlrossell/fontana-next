'use client';
import {IconButton, Stack} from "@mui/material";
import Link from "next/link";
import {CollectionsBookmark, FacebookOutlined, LocalPhone} from "@mui/icons-material";
import twitterImage from '@/../public/twitter.png';
import tiktokImage from '@/../public/tiktok.png';
import Image from "next/image";

const SocialIcons = () => {
    return (
        <Stack position={'fixed'} bottom={0} gap={'.5rem'} bgcolor={'primary.main'} width={'100%'} direction={'row'}
               justifyContent={'center'} height={'3rem'} alignItems={'center'}>
            <Link href={'https://www.facebook.com/BodegaLaFontana'} target={'_blank'}>
                <IconButton sx={{color:'rgb(8, 102, 255)'}}>
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
            <Link href={'https://www.consumidor.gob.pe/libro-de-reclamaciones'} target={'_blank'}>
                <IconButton>
                    <CollectionsBookmark/>
                </IconButton>
            </Link>
            <Link href={'tel:+51904335495'} target={'_blank'}>
                <IconButton>
                    <LocalPhone sx={{fontSize: '2rem'}}/>
                </IconButton>
            </Link>
        </Stack>
    );
}

export default SocialIcons;