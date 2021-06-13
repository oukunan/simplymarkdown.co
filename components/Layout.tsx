import Link from 'next/link'
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
  background-color: #232527;
`

const Main = styled.main`
  flex: 1;
`

export default function Layout(props: Props) {
  return (
    <Container>
      <Header>
        <Link href="/">LOGO</Link>
      </Header>
      <Main>{props.children}</Main>
    </Container>
  )
}
