import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import GlobalStyle from './components/GlobalStyle'

const elRoot = document.getElementById('root')

ReactDOM.render((
  <>
    <GlobalStyle />
    <Main />
  </>
), elRoot)
