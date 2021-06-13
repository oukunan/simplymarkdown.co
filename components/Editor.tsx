import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import MDEditor, { commands } from '@uiw/react-md-editor'

import { customCommands, customExtraCommands } from '../data/custom-commands'
import { Modal } from './Modal'

type Props = {
  value: string
  updateValue: (value: string) => void
}

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

export default function Editor(props: Props) {
  const [fileName, setFileName] = useState('')
  const [resetModalVisible, setResetModalVisible] = useState(false)
  const [downloadModalVisible, setDownloadModalVisible] = useState(false)

  const openResetModal = () => setResetModalVisible(true)
  const closeResetModal = () => setResetModalVisible(false)

  const openDownloadModal = () => setDownloadModalVisible(true)
  const closeDownloadModal = () => setDownloadModalVisible(false)

  const renderResetModal = useCallback(() => {
    return (
      <Modal isOpen={resetModalVisible} onClose={closeResetModal}>
        <p>All text will be removed, are you sure?</p>
        <button onClick={closeResetModal}>No</button>
        <button
          onClick={() => {
            props.updateValue('')
            closeResetModal()
          }}
        >
          Continue
        </button>
      </Modal>
    )
  }, [resetModalVisible, props])

  const renderDownloadModal = useCallback(() => {
    return (
      <Modal isOpen={downloadModalVisible} onClose={closeDownloadModal}>
        <div>
          <h1>Please enter you file name</h1>
          <input
            type="text"
            value={fileName}
            onChange={(e) => {
              e.stopPropagation()

              setFileName(e.target.value)
            }}
          />
          <button
            onClick={() => {
              const a = document.createElement('a')
              const blob = new Blob([props.value])
              a.href = URL.createObjectURL(blob)
              a.download = fileName
              a.click()

              setFileName('')
              closeDownloadModal()
            }}
          >
            Confirm
          </button>
        </div>
      </Modal>
    )
  }, [downloadModalVisible, fileName, props])

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
    customCommands.apiReference,
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
        highlightEnable
      />
      {renderResetModal()}
      {renderDownloadModal()}
    </>
  )
}
