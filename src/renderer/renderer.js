export default class Renderer {
  canvas = null
  raf = null

  constructor (canvas) {
    this.canvas = canvas
  }

  initialize = () => {
    this.draw()
  }

  destroy () {
    if (this.raf) {
      window.cancelAnimationFrame(this.raf)
    }
  }

  draw () {
    this.raf = window.requestAnimationFrame(() => {
      // Do stuff...
    })
  }
}
