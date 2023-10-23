import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import './globals.css'
import {Box, ThemeProvider} from "@mui/material";
import theme from "@/theme/theme";
import Header from "@/components/header";
import DataProvider from "@/global/DataProvider";
import FilterProvider from "@/global/FilterProvider";
import Search from "@/components/search";

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
                <FilterProvider>
                    <Header/>
                    <Box paddingTop={'4rem'}>
                        <Search/>
                        {children}
                    </Box>
                </FilterProvider>
            </DataProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}