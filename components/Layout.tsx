import React from 'react'
import styled from 'styled-components'

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
  /* TODO: Remove this */
  border: 1px solid;
`
const Main = styled.main`
  flex: 1;
`
const Footer = styled.footer`
  height: 64px;

  /* TODO: Remove this */
  border: 1px solid;
`

// eslint-disable-next-line space-before-function-paren
export default function Layout(props: Props) {
  return (
    <Container>
      <Header>LOGO</Header>
      <Main>{props.children}</Main>
      <Footer>This is footer</Footer>
    </Container>
  )
}
