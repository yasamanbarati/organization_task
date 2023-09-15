import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'

import theme from '@/setup/theme'
import { store } from '@/setup/redux/store'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {

  return <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
}
