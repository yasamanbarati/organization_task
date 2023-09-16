export const palette = {
  yellow: {
    main: "#ffb700",
    contrastText: "#fff",
  },
  violet: {
    main: "#202c4a",
    contrastText: "#fff",
    light: "#4d00ca",
    dark: "#03122c",
  },
  white: "#fff",
  dark: "#000",
  red: "#cc0000",
};
declare module "@mui/material/styles" {
  interface Palette {
    yellow: Palette["primary"];
    violet: Palette["primary"];
    white: string;
    dark: string;
    red: string;
  }
  interface PaletteOptions {
    yellow?: PaletteOptions["primary"];
    violet?: PaletteOptions["primary"];
    white?: string;
    dark?: string;
    red: string;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
    dark: true;
    yellow: true;
    violet: true;
  }
}
