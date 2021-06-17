import React, { useState } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Editor from '../components/Editor'
import MarkdownPreview from '../components/MarkdownPreview'
import Text from '../components/Text'
import { styles } from '../styles/styles'
import { useMediaQuery } from 'react-responsive'

import '@uiw/react-md-editor/dist/markdown-editor.css'
import '@uiw/react-markdown-preview/dist/markdown.css'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 24px;
  padding: 20px 50px;
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

export default function Create() {
  const isDesktop = useMediaQuery({ minWidth: 1281 })
  const [value, setValue] = useState('**Hello world!!!**')

  if (!isDesktop && typeof window !== 'undefined') {
    return (
      <NonDesktopWrapper>
        <Text component="h3" weight={600}>
          simplymarkdown.co have best experience with hi-res laptops and
          desktops.
        </Text>
        <Text weight={300} color="primary">
          Please use wider screen and start to create the markdown
        </Text>
      </NonDesktopWrapper>
    )
  }

  return (
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
  )
}
