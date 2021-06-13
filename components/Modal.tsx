import '@reach/dialog/styles.css'

import React from 'react'
import BaseModal from 'react-modal'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Modal(props: Props) {
  return (
    <BaseModal
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <button className="close-button" onClick={props.onClose}>
        x
      </button>
      {props.children}
    </BaseModal>
  )
}
