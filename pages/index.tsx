import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 100px;
`

const Title = styled.h1`
  font-size: 75px;
  margin-top: 0;
`

const SubTitle = styled.h3`
  font-size: 24px;
  margin-top: 0;
  color: #47525d;
  font-weight: 300;
`

const StyledLink = styled.button`
  align-self: flex-start;
  margin-top: 20px;
  padding: 24px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 200;
  background: #232527;
  color: white;
  cursor: pointer;
`

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <Title>Simply Markdown Editor</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          molestias id laboriosam itaque veniam officia aliquam sapiente.
          Inventore, temporibus.
        </SubTitle>
        <Link href="/create">
          <StyledLink>Let's Create Markdown</StyledLink>
        </Link>
      </Wrapper>
    </Layout>
  )
}
