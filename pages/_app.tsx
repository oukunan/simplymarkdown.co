import React from 'react'
import Modal from 'react-modal'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import SEO from '../next-seo.config'
import { GlobalStyle } from '../styles/global'

Modal.setAppElement('#__next')

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <Head>
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="oukunanan"
          data-description="Support me on Buy me a coffee!"
          data-message="Thank you for visiting"
          data-color="#FFDD00"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
