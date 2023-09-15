export const palette = {
  neutral: {
    main: "#fff",
  },
  yellow: {
    main: "#ffb700",
    contrastText: "#fff",
  },
  violet: {
    main: "#1e2247",
    contrastText: "#fff",
    light: "#4d00ca",
    dark: "#02041f",
  },
  red: "#cc0000",
};
declare module '@mui/material/styles' {
    interface Palette {
      neutral: Palette['primary']
      yellow: Palette['primary']
      violet: Palette['primary']
      red: string
    }
    interface PaletteOptions {
      neutral?: PaletteOptions['primary']
      yellow?: PaletteOptions['primary']
      violet?: PaletteOptions['primary']
      red: string
    }
  }
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      neutral: true
      yellow: true
      violet: true
    }
  }
