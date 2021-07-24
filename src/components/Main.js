import React, { useEffect, useRef } from 'react'
import Renderer from '../renderer/renderer'
import styled from 'styled-components'

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Canvas = styled.canvas`
  background-color: black;
`

const SCALE = 0.5
const WIDTH = 1920 * SCALE
const HEIGHT = 1080 * SCALE

const Main = () => {
  const refCanvas = useRef()
  const refRenderer = useRef()

  useEffect(() => {
    const canvas = refCanvas.current
    refRenderer.current = new Renderer(canvas)
  }, [])

  return (
    <Component>
      <Canvas
        width={WIDTH}
        height={HEIGHT}
        ref={refCanvas}
      />
    </Component>
  )
}

export default Main
