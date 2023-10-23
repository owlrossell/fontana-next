'use client';
import {createTheme} from "@mui/material/styles"
import {darken, lighten} from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Palette {
        red: Palette['primary'];
        green: Palette['primary'];
        orange: Palette['primary'];
        whiteSpace: Palette['primary'];
        graySpace: Palette['primary'];
    }

    interface PaletteOptions {
        red: PaletteOptions['primary'];
        green: PaletteOptions['primary'];
        orange: PaletteOptions['primary'];
        whiteSpace: PaletteOptions['primary'];
        graySpace: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        red: true;
        orange: true;
        green: true;
    }
}

declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        red: true;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsColorOverrides {
        text: true;
        red: true;
    }
}

declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        graySpace: true;
        red: true;
    }
}

const redBase = '#C25357';
const greenBase = '#76c893';
const orangeBase = '#E69900';
const graySpaceBase ='#C5BFB5';

const theme = createTheme({
    palette: {
        red: {
            main: redBase,
            dark: darken(redBase, .1),
            light: lighten(redBase, .1),
            contrastText: '#F9F8ED',
        },
        green: {
            main: greenBase,
            dark: darken(greenBase, .1),
            light: lighten(greenBase, .1),
            contrastText: '#F9F8ED',
        },
        whiteSpace: {
            main: '#F9F8ED',
            contrastText: '897E6D'
        },
        graySpace: {
            main: graySpaceBase,
            dark: darken(graySpaceBase, .1),
            light: lighten(graySpaceBase, .1),
            contrastText: '#F9F8ED',
        },
        orange: {
            main: orangeBase,
            dark: darken(orangeBase, .1),
            light: lighten(orangeBase, .1),
            contrastText: '#fff',
        },
        primary: {
            main: '#FFDE59',
            light: '#FFF0B3',
            contrastText: '#785B06',
        },
        secondary: {
            main: '#E69900',
        },
        text: {
            primary: '#3D321F',
            secondary: '#897E6D',
        }
    },
    typography: {
        fontFamily: '__Montserrat_c73a0c, __Montserrat_Fallback_c73a0c',
        h5: {
            fontSize: '1rem',
            fontWeight: 600,
        },
        h6: {
            fontSize: '.8rem',
            fontWeight: 600,
        }
    },
});

export default theme;