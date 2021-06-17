import React from 'react'
import { Color, Colors } from '../styles/styles'

type Props = {
  color?: Color
  /**
   * Sync with @font-face
   */
  weight?: 200 | 300 | 500 | 600 | 700 | 800
  component?: 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
}

export default function Text(props: Props) {
  const component = props.component || 'span'

  const style: React.CSSProperties = {
    color: props.color && Colors[props.color],
    fontWeight: props.weight || 300,
  }

  return React.createElement(component, { style }, props.children)
}
