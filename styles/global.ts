import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-ExtraLight.ttf");
  font-style: normal;
  font-weight: 200;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-Light.ttf");
  font-style: normal;
  font-weight: 300;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-Medium.ttf");
  font-style: medium;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-SemiBold.ttf");
  font-style: medium;
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-Bold.ttf");
  font-style: medium;
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-ExtraBold.ttf");
  font-style: medium;
  font-weight: 800;
  font-display: swap;
}

* {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#__next {
  height: 100%;
}`
