import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { initializeAppData } from '@/services/services'
import { store } from '@/setup/redux/store'

import theme from '@/setup/theme'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  initializeAppData()

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
