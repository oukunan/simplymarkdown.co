import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Colors } from '../styles/styles'

type Props = {
  children: React.ReactNode
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
  background-color: ${Colors.primary};
  padding: 0 32px;
  flex-shrink: 0;

  a {
    text-decoration: none;
    color: white;
    letter-spacing: 2px;
    font-weight: 400;
  }
`

const Main = styled.main`
  flex: 1;
`

export default function Layout(props: Props) {
  return (
    <Container>
      <Header>
        <Link href="/">simplymarkdown.co</Link>
      </Header>
      <Main>{props.children}</Main>
    </Container>
  )
}
