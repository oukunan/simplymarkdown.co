import React, { useState } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Editor from '../components/Editor'
import MarkdownPreview from '../components/MarkdownPreview'

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
  border-radius: 8px;
`

export default function Create() {
  const [value, setValue] = useState('**Hello world!!!**')

  return (
    <Layout>
      <Wrapper>
        <Item>
          <Editor value={value} updateValue={setValue} />
        </Item>
        <Item>
          <MarkdownPreview value={value} />
        </Item>
        <button
          onClick={() => {
            const filename = prompt('Enter you file name')
            if (filename) {
              const a = document.createElement('a')
              const blob = new Blob([value])
              a.href = URL.createObjectURL(blob)
              a.download = filename
              a.click()
            }
          }}
        >
          Download
        </button>
      </Wrapper>
    </Layout>
  )
}
