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
  const [modalVisible, setModalVisible] = useState(false)

  const openModal = () => setModalVisible(true)
  const closeModal = () => setModalVisible(false)

  const renderModal = useCallback(() => {
    return (
      <Modal isOpen={modalVisible} onClose={closeModal}>
        <p>All text will be removed, are you sure?</p>
        <button onClick={closeModal}>No</button>
        <button
          onClick={() => {
            props.updateValue('')
            closeModal()
          }}
        >
          Continue
        </button>
      </Modal>
    )
  }, [modalVisible, props])

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
          {
            ...customExtraCommands.reset,
            execute: openModal,
          },
        ]}
        onChange={(value) => props.updateValue(value ?? '')}
        visiableDragbar={false}
        highlightEnable
      />
      {renderModal()}
    </>
  )
}
