import 'babel-polyfill'
import React, { Component } from 'react'
// import styled from 'styled-components'
import Sketch from 'sketch-js'

function Particle (x, y, radius) {
  this.init(x, y, radius)
}

Particle.prototype = {
  init: function (x, y, radius) {
    this.alive = true

    this.radius = radius || 10
    this.wander = 0.15
    this.theta = Math.random(Math.TWO_PI)
    this.drag = 0.92
    this.color = '#fff'

    this.x = x || 0.0
    this.y = y || 0.0

    this.vx = 0.0
    this.vy = 0.0
  },
  move: function () {
    this.x += this.vx
    this.y += this.vy

    this.vx *= this.drag
    this.vy *= this.drag

    this.theta += Math.random(-0.5, 0.5) * this.wander
    this.vx += Math.sin(this.theta) * 0.1
    this.vy += Math.cos(this.theta) * 0.1

    this.radius *= 0.96
    this.alive = true // this.radius > 0.35
  },
  draw: function (ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.TWO_PI)
    ctx.fillStyle = this.color
    ctx.fill()
  }
}

export default class Circles extends Component {
  state = {
  }
  componentDidMount () {
    // variable
    var MAX_PARTICLES = 280
    var COLOURS = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ]
    var particles = []
    var pool = []
    // variable

    var demo = Sketch.create()
    demo.setup = function () {
      var i, x, y
      for (i = 0; i < 20; i++) {
        x = (demo.width * 0.5) + Math.random(-100, 100)
        y = (demo.height * 0.5) + Math.random(-100, 100)
        demo.spawn(x, y)
      }
    }

    demo.spawn = function (x, y) {
      console.log('MAX_PARTICLES', MAX_PARTICLES)
      if (particles.length >= MAX_PARTICLES) pool.push(particles.shift())

      let particle = pool.length ? pool.pop() : new Particle()
      console.log(particle)
      particle.init(x, y, Math.random(5, 40))

      particle.wander = Math.random(0.5, 2.0)
      particle.color = Math.random(COLOURS)
      particle.drag = Math.random(0.9, 0.99)

      let theta = Math.random(Math.TWO_PI)
      let force = Math.random(2, 8)

      particle.vx = Math.sin(theta) * force
      particle.vy = Math.cos(theta) * force

      particles.push(particle)
    }

    demo.update = function () {
      var i, particle
      for (i = particles.length - 1; i >= 0; i--) {
        particle = particles[i]

        if (particle.alive) particle.move()
        else pool.push(particles.splice(i, 1)[0])
      }
    }

    demo.draw = function () {
      demo.globalCompositeOperation = 'lighter'
      for (var i = particles.length - 1; i >= 0; i--) {
        particles[i].draw(demo)
      }
    }

    demo.mousemove = function () {
      var touch, max, i, j, n
      for (i = 0, n = demo.touches.length; i < n; i++) {
        touch = demo.touches[i]
        max = Math.random(1, 4)
        for (j = 0; j < max; j++) demo.spawn(touch.x, touch.y)
      }
    }
    // ctx.draw = function () {
    //   this.fillStyle = 'rgb(' + ~~this.r + ',' + ~~this.g + ',' + ~~this.b + ')'
    //   this.fillRect(0, 0, this.width, this.height)
    // }
    // ctx.mousemove = function (e) {
    //   this.r = 255 * (e.x / this.width)
    //   this.g = 255 * (e.y / this.height)
    //   this.b = 255 * Math.abs(Math.cos(Math.PI * e.y / this.width))
    // }

    // window.addEventListener('mousemove', (e) => {
    //   demo.mousemove = function () {
    //     var touch, max, i, j, n
    //     for (i = 0, n = demo.touches.length; i < n; i++) {
    //       touch = demo.touches[i]
    //       max = Math.random(1, 4)
    //       for (j = 0; j < max; j++) demo.spawn(touch.x, touch.y)
    //     }
    //   }
    // }, false)
  }
  render () {
    return (
      <div id="container" style={{ zIndex: 1000 }}></div>
    )
  }
}
