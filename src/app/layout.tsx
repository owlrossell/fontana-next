import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import './globals.css'
import {Box, ThemeProvider} from "@mui/material";
import theme from "@/theme/theme";
import Header from "@/components/header";
import DataProvider from "@/global/DataProvider";
import SearchProvider from "@/components/search/SearchProvider";
import Search from "@/components/search";
import ProductView from "@/components/product-view";
import CartProvider from "@/components/cart/CartProvider";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    style: 'normal',
})

export const metadata: Metadata = {
    title: 'Fontana Bodega',
    description: 'La mejor bodega de la zona',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="es">
        <body className={montserrat.className}>
        <ThemeProvider theme={theme}>
            <DataProvider>
                <SearchProvider>
                    <CartProvider>
                        <Header/>
                        <Box paddingTop={'4rem'}>
                            <Search/>
                        </Box>
                        <ProductView/>
                    </CartProvider>
                </SearchProvider>
            </DataProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}