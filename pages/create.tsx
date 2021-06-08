import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 24px;
  padding: 20px 50px;
`

const Item = styled.div`
  flex: 1;
  border: 1px solid;
  height: 100%;
`

export default function Create() {
  return (
    <Layout>
      <Container>
        <Item>Hello</Item>
        <Item>
          <ReactMarkdown># Hello, *world*!</ReactMarkdown>
        </Item>
      </Container>
    </Layout>
  )
}
