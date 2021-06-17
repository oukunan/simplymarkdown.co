import React from 'react'
import styled, { CSSObject } from 'styled-components'
import { styles } from '../styles/styles'

type ButtonType = 'primary' | 'secondary'

type Props = {
  type?: ButtonType
  disabled?: boolean
  onClick: () => void
  children: React.ReactNode
}

const StyledButton = styled.button<{ style: CSSObject }>`
  padding: 8px 16px;
  border: none;
  border-radius: ${styles.borderRadius};
  border: ${(props) => `1px solid ${props.disabled ? 'lightgray' : 'black'}`};
  background-color: var(--backgroundColor);
  color: var(--color);
`

export default function Button(props: Props) {
  const styles = {
    primary: {
      backgroundColor: props.disabled ? 'lightgray' : 'black',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'white',
      color: props.disabled ? 'lightgray' : 'black',
    },
  }

  const style = styles[props.type ?? 'primary']

  return (
    <StyledButton
      style={{
        '--backgroundColor': style.backgroundColor,
        '--color': style.color,
      }}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  )
}
