import '@reach/dialog/styles.css'

import React from 'react'
import { Dialog } from '@reach/dialog'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Modal(props: Props) {
  return (
    <Dialog isOpen={props.isOpen} onDismiss={props.onClose}>
      <button className="close-button" onClick={props.onClose}>
        <span aria-hidden>×</span>
      </button>
      {props.children}
    </Dialog>
  )
}
