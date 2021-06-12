import React, { useState } from 'react'
import styled from 'styled-components'
import MDEditor, { commands } from '@uiw/react-md-editor'

import Layout from '../components/Layout'
import { customCommands } from '../data/custom-commands'

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
  border: 1px solid black;
  border-radius: 8px;
`

const MDEStyled = styled(MDEditor)`
  .w-md-editor-content {
    flex: 1;
  }

  .w-md-editor-text-pre > code,
  .w-md-editor-text-input > code,
  .w-md-editor-text > .w-md-editor-text-pre > code.w-md-editor-text-pre,
  .w-md-editor-text-input,
  .w-md-editor-text > .w-md-editor-text-pre {
    font-family: monospace;
  }
`

export default function Create() {
  const [value, setValue] = useState('**Hello world!!!**')

  return (
    <Layout>
      <Wrapper>
        <Item>
          <MDEStyled
            value={value}
            commands={[
              commands.bold,
              commands.italic,
              commands.strikethrough,
              commands.hr,
              commands.group(
                [
                  commands.title1,
                  commands.title2,
                  commands.title3,
                  commands.title4,
                  commands.title5,
                  commands.title6,
                ],
                {
                  name: 'title',
                  groupName: 'title',
                  buttonProps: { 'aria-label': 'Insert title' },
                }
              ),
              commands.divider,
              commands.link,
              commands.quote,
              commands.image,
              commands.divider,
              commands.orderedListCommand,
              commands.unorderedListCommand,
              commands.checkedListCommand,
              customCommands.apiReference,
            ]}
            extraCommands={[]}
            highlightEnable
            onChange={(value) => setValue(value ?? '')}
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            visiableDragbar={false}
            preview="edit"
          />
        </Item>
        <Item>
          <MDEditor.Markdown
            source={value}
            style={{
              height: '100%',
              padding: '48px 24px',
            }}
          />
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
