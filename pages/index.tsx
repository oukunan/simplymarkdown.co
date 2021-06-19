import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Layout from '../components/Layout'
import GitHubSVG from '../public/github.svg'
import Text from '../components/Text'
import { Colors, styles } from '../styles/styles'

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 64px 96px;

  @media only screen and (max-width: 600px) {
    padding: 80px 32px;
  }
`
const Title = styled.h1`
  font-size: 4.5rem;
  margin-top: 0;

  @media only screen and (max-width: 600px) {
    font-size: 4rem;
  }
`

const StrokeWord = styled.span`
  color: white;
  -webkit-text-stroke-width: 1.75px;
  -webkit-text-stroke-color: ${Colors.primary}; ;
`

const SubTitleWrapper = styled.div`
  max-width: 800px;
`

const SubTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 0;

  @media only screen and (max-width: 600px) {
    font-size: 1.25rem;
  }
`

const StyledLink = styled.button`
  padding: 20px 32px;
  border: none;
  border-radius: ${styles.borderRadius};
  font-size: 1.25rem;
  background-color: ${Colors.primary};
  color: white;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background: ${Colors.secondary};
  }

  &:active {
    transform: scale(0.95);
  }
`

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;

  // "gap" does not work with Safari v14.0
  > *:not(:last-child) {
    margin-right: 20px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;

    // "gap" does not work with Safari v14.0
    > *:not(:last-child) {
      margin-bottom: 20px;
    }

    ${StyledLink} {
      width: 100%;
    }
  }
`

const Floating = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  width: 400px;
  animation: float 3s ease-in-out infinite;

  @media only screen and (max-width: 1200px) {
    display: none;
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-50px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <Floating>
          <img
            src="/paper.png"
            width="100%"
            height="100%"
            alt="paper.png by sometriclove.com"
          />
        </Floating>
        <Title>
          Simply <StrokeWord>Markdown</StrokeWord> Editor
        </Title>
        <SubTitleWrapper>
          <SubTitle>
            <Text color="secondary">
              The quickest way to create a markdown file with{' '}
              <Text weight={600}>live preview</Text>,{' '}
              <Text weight={600}>custom template </Text> and{' '}
              <Text weight={600}>instant download</Text>.
            </Text>
          </SubTitle>
        </SubTitleWrapper>
        <LinkWrapper>
          <Link href="/create">
            <StyledLink>Let's Create</StyledLink>
          </Link>
          <a
            href="https://www.producthunt.com/posts/simplymarkdown?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-simplymarkdown"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=300832&theme=light"
              alt="Simplymarkdown - Easy create markdown with template and live preview | Product Hunt"
              width="250"
              height="54"
            />
          </a>
          <a
            href="https://github.com/futurouz/readme"
            target="__blank"
            rel="noopener"
          >
            <GitHubSVG />
          </a>
          <Text>100% Free</Text>
        </LinkWrapper>
      </Wrapper>
    </Layout>
  )
}
