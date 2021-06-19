import '@uiw/react-md-editor/dist/markdown-editor.css'
import '@uiw/react-markdown-preview/dist/markdown.css'

import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import MDEditor, { commands } from '@uiw/react-md-editor'

import { customCommands, customExtraCommands } from '../data/custom-commands'
import { styles } from '../styles/styles'
import Button from './Button'
import Modal from './Modal'
import Text from './Text'

type Props = {
  value: string
  updateValue: (value: string) => void
}

type MarkdownExtension = 'md' | 'markdown'

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
    /** 
     * Prevent some character overlap
     */
    letter-spacing: 0.1px;
  }

  .w-md-editor-toolbar li > button {
    color: black;
  }

  .w-md-editor-toolbar-child .w-md-editor-toolbar ul > li button {
    padding: 10px 15px;
    text-align: left;
  }
`

const DownloadModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 400px;
`

const RadioList = styled.div`
  margin-top: 10px;
`
const DownloadInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 500;
    margin-bottom: 10px;
  }

  input {
    border: 1px solid #dfdfe0;
    border-radius: ${styles.borderRadius};
    padding: 10px;
  }
`

const FileExtensionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Editor(props: Props) {
  const [fileName, setFileName] = useState('')
  const [fileExtension, setFileExtension] = useState<MarkdownExtension>('md')
  const [resetModalVisible, setResetModalVisible] = useState(false)
  const [downloadModalVisible, setDownloadModalVisible] = useState(false)

  const openResetModal = () => setResetModalVisible(true)
  const closeResetModal = () => setResetModalVisible(false)

  const openDownloadModal = () => setDownloadModalVisible(true)
  const closeDownloadModal = () => {
    setFileName('')
    setDownloadModalVisible(false)
  }

  const renderResetModal = useCallback(() => {
    return (
      <Modal
        isOpen={resetModalVisible}
        onClose={closeResetModal}
        buttons={
          <>
            <Button type="secondary" onClick={closeResetModal}>
              No
            </Button>
            <Button
              onClick={() => {
                props.updateValue('')
                closeResetModal()
              }}
            >
              Continue
            </Button>
          </>
        }
      >
        <Text component="h4" weight={500}>
          All text will be removed, are you sure?
        </Text>
      </Modal>
    )
  }, [resetModalVisible, props])

  const renderDownloadModal = useCallback(() => {
    return (
      <Modal
        isOpen={downloadModalVisible}
        onClose={closeDownloadModal}
        buttons={
          <Button
            disabled={fileName.trim().length === 0}
            onClick={() => {
              const a = document.createElement('a')
              const blob = new Blob([props.value])
              a.href = URL.createObjectURL(blob)
              a.download = `${fileName}.${fileExtension}`
              a.click()

              setFileName('')
              closeDownloadModal()
            }}
          >
            Download
          </Button>
        }
      >
        <DownloadModalContent>
          <DownloadInputWrapper>
            <label htmlFor="filename">File name</label>
            <input
              name="filename"
              id="filename"
              type="text"
              value={fileName}
              onChange={(e) => {
                e.stopPropagation()

                setFileName(e.target.value)
              }}
              autoFocus
            />
          </DownloadInputWrapper>
          <FileExtensionWrapper>
            <Text weight={500}>Pick your file extension</Text>
            <RadioList>
              <input
                type="radio"
                name="md"
                id="md"
                value="md"
                checked={fileExtension === 'md'}
                onChange={(e) =>
                  setFileExtension(e.target.value as MarkdownExtension)
                }
              />
              <label htmlFor="md">.md</label>

              <br />
              <input
                type="radio"
                name="markdown"
                id="markdown"
                value="markdown"
                checked={fileExtension === 'markdown'}
                onChange={(e) =>
                  setFileExtension(e.target.value as MarkdownExtension)
                }
              />
              <label htmlFor="markdown">.markdown</label>
            </RadioList>
          </FileExtensionWrapper>
          <br />
        </DownloadModalContent>
      </Modal>
    )
  }, [downloadModalVisible, fileName, fileExtension, props])

  const getCommands = () => [
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
    commands.group(
      [
        customCommands.codeExample,
        customCommands.apiReference,
        customCommands.contributing,
        customCommands.pullRequest,
        customCommands.collapsible,
      ],
      {
        name: 'Templates',
        groupName: 'templates',
        icon: <span>Templates</span>,
        buttonProps: { 'aria-label': 'Insert Templates' },
      }
    ),
  ]

  return (
    <>
      <MDEStyled
        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        value={props.value}
        preview="edit"
        commands={getCommands()}
        extraCommands={[
          customExtraCommands.copy,
          {
            ...customExtraCommands.reset,
            execute: openResetModal,
          },
          {
            ...customExtraCommands.download,
            execute: openDownloadModal,
          },
        ]}
        onChange={(value) => props.updateValue(value ?? '')}
        visiableDragbar={false}
        autoFocus
        highlightEnable
      />
      {renderResetModal()}
      {renderDownloadModal()}
    </>
  )
}
