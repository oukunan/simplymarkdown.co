import React from 'react'
import BaseModal from 'react-modal'
import styled from 'styled-components'

type Props = {
  isOpen: boolean
  buttons: React.ReactNode
  onClose: () => void
  children: React.ReactNode
}

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  padding: 10px;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  // "gap" does not work with Safari v14.0
  > *:not(:last-child) {
    margin-right: 8px;
  }
`

export default function Modal(props: Props) {
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
        overlay: {
          /**
           * Make sure that overlay will higher that menu popup
           */
          zIndex: 1,
        },
      }}
    >
      <CloseButton onClick={props.onClose}>&#x2715;</CloseButton>
      {props.children}
      <ButtonWrapper>{props.buttons}</ButtonWrapper>
    </BaseModal>
  )
}
