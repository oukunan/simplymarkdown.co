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
  padding-left: 32px;
  padding-right: 32px;
  flex-shrink: 0;

  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    letter-spacing: 3px;
  }
`

const Main = styled.main`
  flex: 1;
`

export default function Layout(props: Props) {
  return (
    <Container>
      <Header>
        <Link href="/">📝 markdown.init</Link>
      </Header>
      <Main>{props.children}</Main>
    </Container>
  )
}
