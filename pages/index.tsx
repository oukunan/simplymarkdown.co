import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Layout from '../components/Layout'
import GitHubSVG from '../assets/github.svg'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 128px 64px 96px;
`

const Title = styled.h1`
  font-size: 72px;
  font-weight: 700;
  margin-top: 0;

  @media only screen and (max-width: 600px) {
    font-size: 60px;
  }
`
const SubTitleWrapper = styled.div`
  max-width: 800px;
`

const SubTitle = styled.h3`
  font-size: 24px;
  margin-top: 0;
  color: #47525d;
  font-weight: 300;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`

const StyledLink = styled.button`
  align-self: flex-start;
  margin: 20px 0;
  padding: 20px 32px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 200;
  background: #232527;
  color: white;
  cursor: pointer;
`

const Bold = styled.span`
  font-weight: 600;
`

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <Title>Simply Markdown Editor</Title>
        <SubTitleWrapper>
          <SubTitle>
            A simple way to create a markdown file with{' '}
            <Bold>live preview</Bold>, <Bold>custom template </Bold> and{' '}
            <Bold>instant download</Bold>.
          </SubTitle>
        </SubTitleWrapper>
        <Link href="/create">
          <StyledLink>Let's Create</StyledLink>
        </Link>
        <a
          href="https://github.com/futurouz/readme"
          target="__blank"
          rel="noopener"
        >
          <GitHubSVG />
        </a>
      </Wrapper>
    </Layout>
  )
}
