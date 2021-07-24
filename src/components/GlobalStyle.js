import 'sanitize.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    line-height: 1.6;
    font-family: Inter, sans-serif;
    color: white;
    font-kerning: normal;
    text-rendering: optimizeLegibility;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    overflow-y: scroll;
  }

  // Hide input text number controls
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // Firefox: Hide input text number controls
  input[type=number] {
    -moz-appearance: textfield;
  }
`

export default GlobalStyle
