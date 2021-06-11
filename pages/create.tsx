import React, { useState } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'

import MDEditor from '@uiw/react-md-editor'
import '@uiw/react-md-editor/dist/markdown-editor.css'
import '@uiw/react-markdown-preview/dist/markdown.css'

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 24px;
  padding: 20px 50px;
`

const Item = styled.div`
  flex: 1;
  border: 1px solid;
  height: 100%;
`

const MDEStyled = styled(MDEditor)`
  .w-md-editor-content {
    flex: 1;
  }
`

export default function Create() {
  const [value, setValue] = useState('**Hello world!!!**')

  return (
    <Layout>
      <Container>
        <Item>
          <MDEStyled
            value={value}
            highlightEnable
            onChange={(value) => setValue(value ?? '')}
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            visiableDragbar={false}
            preview="edit"
          />
        </Item>
        <Item>
          <MDEditor.Markdown source={value} style={{ height: '100%' }} />
        </Item>
      </Container>
    </Layout>
  )
}
