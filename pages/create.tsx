import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { styles } from '../styles/styles'
import Layout from '../components/Layout'
import Editor from '../components/Editor'
import MarkdownPreview from '../components/MarkdownPreview'
import Text from '../components/Text'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 50px;

  /**
   * "gap" does not work with Safari v14.0
   */
  > *:not(:last-child) {
    margin-right: 24px;
  }
`

const Item = styled.div`
  flex: 1;
  height: 100%;
  max-height: calc(100vh - 160px);
  overflow: auto;
  border: 1px solid #dfdfe0;
  border-radius: ${styles.borderRadius};
`

const NonDesktopWrapper = styled.div`
  margin: auto;
  margin-top: 100px;
  text-align: center;
  padding: 0 50px;
`

const initialState = '**Hello world!!!**'
const warningText = 'You will lost your changes, are you sure to do that?'

export default function Create() {
  const router = useRouter()
  const isDesktop = useMediaQuery({ minWidth: 1281 })
  const [value, setValue] = useState(initialState)
  const isClean = value === initialState

  /**
   * Handle route (NextJS route) change when markdown changed
   */
  useEffect(() => {
    const handleBrowseAway = () => {
      if (isClean) {
        return
      }

      // TODO: Better to use `Modal` component
      if (window.confirm(warningText)) {
        return
      }

      router.events.emit('routeChangeError')

      throw new Error('Prevent changing route')
    }
    router.events.on('routeChangeStart', handleBrowseAway)

    return () => {
      router.events.off('routeChangeStart', handleBrowseAway)
    }
  }, [router.events, isClean])

  /**
   * Handle closing `window` when markdown changed
   */
  useEffect(() => {
    const handleWindowClose = (e: BeforeUnloadEvent) => {
      if (isClean) {
        return
      }

      e.preventDefault()

      return (e.returnValue = warningText)
    }
    window.addEventListener('beforeunload', handleWindowClose)

    return () => {
      window.removeEventListener('beforeunload', handleWindowClose)
    }
  }, [isClean])

  if (!isDesktop && typeof window !== 'undefined') {
    return (
      <NonDesktopWrapper>
        <Text component="h3" weight={600}>
          simplymarkdown.co have the best experience with desktop
        </Text>
        <Text weight={300} color="primary">
          Please use wider screen and start to create the markdown :)
        </Text>
      </NonDesktopWrapper>
    )
  }

  return (
    <>
      <Head>
      </Head>
      <Layout>
        <Wrapper>
          <Item>
            <Editor value={value} updateValue={setValue} />
          </Item>
          <Item>
            <MarkdownPreview value={value} />
          </Item>
        </Wrapper>
      </Layout>
    </>
  )
}
