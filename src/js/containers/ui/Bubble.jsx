import 'babel-polyfill'
import React, { Component } from 'react'
import styled from 'styled-components'

// let ticking = false
const BubbleCanvas = styled.canvas`
  top: 0;
  position: absolute;
  -webkit-filter: url('#goo');
  filter: url('#goo');
  z-index: 0;
  height: ${props => props.height ? '100vh' : '100vh'};
`
export default class Bubble extends Component {
  state = {
    lastKnownScrollPosition: 0
  }
  calcHeight = () => {
    return document.body.scrollHeight.toString() + 'px'
  }
  componentDidMount () {
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    const colorPallete = ['#ff1783', '#17c9ff', '#36ff40']

    var width = canvas.width = window.innerWidth
    var height = canvas.height = window.innerHeight
    var origin = {x: width / 2, y: height / 2}
    var mouse = {x: width / 2, y: height / 2}
    var balls = []
    var count = 0
    var randomCount = 1

    window.onresize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      origin = {x: width / 2, y: height / 2}
    }

    class Ball {
      constructor () {
        this.x = origin.x
        this.y = origin.y
        this.angle = Math.PI * 2 * Math.random()
        this.vx = (1.3 + Math.random() * 0.3) * Math.cos(this.angle)
        this.vy = (1.3 + Math.random() * 0.3) * Math.sin(this.angle)
        this.r = 6 + 3 * Math.random()
        this.color = colorPallete[Math.floor(Math.random() * colorPallete.length)]
      }

      update () {
        this.x += this.vx
        this.y += this.vy
        this.r -= 0.01
      }
    }

    loop()
    function loop () {
      context.clearRect(0, 0, width, height)
      if (count === randomCount) {
        balls.push(new Ball())
        count = 0
        randomCount = 5 + Math.floor(Math.random() * 5)
      }
      count++
      for (var i = 0; i < balls.length; i++) {
        var b = balls[i]
        context.fillStyle = b.color
        context.beginPath()
        context.arc(b.x, b.y, b.r, 0, Math.PI * 2, false)
        context.fill()
        b.update()
      }

      origin.x += (mouse.x - origin.x) * 0.15
      origin.y += (mouse.y - origin.y) * 0.15

      context.fillStyle = '#ffdd02'
      context.beginPath()
      context.arc(origin.x, origin.y, 20, 0, Math.PI * 2, false)
      context.fill()

      removeBall()
      requestAnimationFrame(loop)
    }

    function removeBall () {
      for (var i = 0; i < balls.length; i++) {
        var b = balls[i]
        if (
          b.x + b.r < 0 ||
          b.x - b.r > width ||
          b.y + b.r < 0 ||
          b.y - b.r > height ||
          b.r <= 0
        ) {
          balls.splice(i, 1)
        }
      }
    }

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY + 0 // this.state.lastKnownScrollPosition
    }, false)
    // window.addEventListener('scroll', (e) => {
    //   // let lastKnownScrollPosition = window.scrollY
    //   this.setState({
    //     lastKnownScrollPosition: window.scrollY
    //   })
    //   if (!ticking) {
    //     window.requestAnimationFrame(() => {
    //       ticking = false
    //     })
    //   }
    //   ticking = true
    // }, false)
  }
  render () {
    return (
      <div style={{ position: 'absolute', top: '0', left: '0' }}>
        <BubbleCanvas id='canvas' style={{ display: 'block' }} height={'100%'/* this.calcHeight */}></BubbleCanvas>
        <svg style={{ width: 0, height: 0 }} xmlns='http://www.w3.org/2000/svg' version='1.1'>
          <defs>
            <filter id='goo'>
              <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
              <feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -9'/>
            </filter>
          </defs>
        </svg>
      </div>
    )
  }
}
