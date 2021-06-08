import { ResetStyle } from '../styles/reset'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
