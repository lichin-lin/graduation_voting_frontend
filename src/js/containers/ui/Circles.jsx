import 'babel-polyfill'
import React, { Component } from 'react'
// import styled from 'styled-components'
import Sketch from 'sketch-js'

export default class Circles extends Component {
  state = {
  }
  componentDidMount () {
    var ctx = Sketch.create()
    ctx.setup = function () {
      this.r = this.g = this.b = Math.random(100, 200)
    }
    ctx.draw = function () {
      this.fillStyle = 'rgb(' + ~~this.r + ',' + ~~this.g + ',' + ~~this.b + ')'
      this.fillRect(0, 0, this.width, this.height)
    }
    ctx.mousemove = function (e) {
      this.r = 255 * (e.x / this.width)
      this.g = 255 * (e.y / this.height)
      this.b = 255 * Math.abs(Math.cos(Math.PI * e.y / this.width))
    }

    window.addEventListener('mousemove', (e) => {
      let r = 255 * (e.clientX / 1024)
      let g = 255 * (e.clientY / 768)
      let b = 255 * Math.abs(Math.cos(Math.PI * e.clientY / 1024))
      ctx.draw = function () {
        this.fillStyle = 'rgb(' + ~~r + ',' + ~~g + ',' + ~~b + ')'
        this.fillRect(0, 0, this.width, this.height)
      }
    }, false)
  }
  render () {
    return (
      <div id="container"></div>
    )
  }
}
