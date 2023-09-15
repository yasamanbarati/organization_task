import { createTheme } from '@mui/material'
import { palette } from './palette';

const theme = createTheme({
  palette: palette,
  typography: {
    h1: {
      fontSize: '1.25rem',//20px
      fontWeight: '800',
      lineHeight: '25px',
      letterSpacing: '0'
    },
    h2: {
      fontSize: '1.125rem',//18px
      fontWeight: '700',
      lineHeight: '25px',
      letterSpacing: '0'
    },
    h3: {
      fontSize: '1rem',//16px
      fontWeight: '600'
    },
    body1: {
      fontSize: '0.875rem',//14px
      fontWeight: '500',
      lineHeight: '19px',
      letterSpacing: '0'
    },
    body2: {
      fontSize: '0.75rem',//12px
      fontWeight: '500',
      lineHeight: '15px',
      letterSpacing: '0'
    },
  }
})

export default theme;