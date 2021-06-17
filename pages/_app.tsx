import React from 'react'
import Modal from 'react-modal'
import { DefaultSeo } from 'next-seo'

import SEO from '../next-seo.config'
import { GlobalStyle } from '../styles/global'

Modal.setAppElement('#__next')

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
