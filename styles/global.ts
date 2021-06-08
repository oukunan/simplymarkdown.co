import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;

  height: 100%;
}

#__next {
  height: 100%;
}`
