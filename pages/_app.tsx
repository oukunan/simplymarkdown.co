import React from 'react'
import Modal from 'react-modal'
import { GlobalStyle } from '../styles/global'

Modal.setAppElement('#__next')

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
