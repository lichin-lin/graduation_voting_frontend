import 'babel-polyfill'
import React, { Component } from 'react'
import styled from 'styled-components'
// import Containers from 'containers'
import { withRouter } from 'react-router-dom'
import Swiper from 'react-id-swiper'
import { breakpoint } from 'js/style/utils.js'
import { fontSize } from 'js/style/font.js'
import { ChevronsLeft, ChevronsRight } from 'react-feather'
import { MorphReplace } from 'react-svg-morph'

let logoSrc = require('assets/image/logo.png')
let album1 = require('assets/image/a1.jpg')
let album2 = require('assets/image/a2.jpg')
let album3 = require('assets/image/a3.jpg')
let album4 = require('assets/image/a4.jpg')

const StyleRoot = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`
const LogoWrapper = styled.div`
  width: calc(30vw);
  height: auto;
  > img {
    width: 100%;
    height: auto;
  }
`

const BubbleCanvas = styled.canvas`
  top: 0;
  position: absolute;
  -webkit-filter: url('#goo');
  filter: url('#goo');
  z-index: 0;
`
const SwiperWrapper = styled.div`
  z-index: 1;
  width: 100%;
  height: 500px;
  padding: 20px 0;
  flex: 1;
  margin-bottom: 50px;

  .swiper-container {
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow:visible;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 80vw;
    background: transparent;
    transition: 0.5s ease;
    transform: scale(0.5) translateY(-50px);
    opacity: 0.5;
  }
  .swiper-slide-active {
    opacity: 1;
    transition: 0.5s ease;
    transform: scale(0.8) translateY(0px);
    /* -webkit-box-shadow: 0 10px 6px -6px #000;
       -moz-box-shadow: 0 10px 6px -6px #000;
            box-shadow: 0 10px 6px -6px #000; */
  }
  @media screen and (max-width: ${breakpoint.tablet}) {
    .swiper-slide-active {
      transform: scale(1) translateY(0px);
    }
    .swiper-slide-prev {
      transform: scale(0.5) translate(0vw, -200px) rotate(-5deg);
    }
    .swiper-slide-next {
      transform: scale(1.25) translate(15vw, 100px) rotate(5deg);
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
`
const AlbumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 100%;
    height: auto;
  }
`
const Cover = styled.div`
  width: 90%;
  height: auto;
  width: 50vw;
  height: 50vw;
  background-image: url(${props => props.bgSrc ? props.bgSrc : logoSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
  -webkit-box-shadow: 0px 5px 10px rgba(20, 20, 20, 0.75);
     -moz-box-shadow: 0px 5px 10px rgba(20, 20, 20, 0.75);
          box-shadow: 0px 5px 10px rgba(20, 20, 20, 0.75);
  position: relative;
  z-index: 1;
  @media screen and (max-width: ${breakpoint.tablet}) {
    width: 50vw;
    height: 50vw;
  }
  > img {
    width: 100%;
    height: auto;
  }
  &:after {
    z-index: -999999;
    content: '';
    top: -50px;
    left: 120px;
    width: 475px;
    height: 475px;
    position: absolute;
    background-image: url('http://albums.world/media/vinyl.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    @media screen and (max-width: ${breakpoint.tablet}) {
      top: -15vw;
      left: 15vw;
      width: 75vw;
      height: 75vw;
      display: none;
    }
  }
`
const CoverTitle = styled.div`
  margin-bottom: 16px;
  > * {
    color: white;
    letter-spacing: 1px;
    font-size: ${fontSize.h3};
  }
  > h3 {
    margin: 4px 0;
  }

  > h4 {
    opacity: 0.8;
    margin: 2px 0;
    font-size: ${fontSize.h4};
  }

  @media screen and (max-width: ${breakpoint.tablet}) {
    font-size: ${fontSize.p1};
    > h4 {
      font-size: ${fontSize.p2};
    }
  }
`
const ButtonGroup = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const SongButton = styled.div`
  cursor: pointer;
  width: ${props => props.size ? props.size : '50px'};
  height: ${props => props.size ? props.size : '50px'};
  > svg {
    width: 100%;
    height: auto;
    stroke: white;
    > * {
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 1.5;
      stroke: white;
    }
  }
`
class Play extends React.Component {
  render () {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3 19 12 5 21z"></path>
      </svg>
    )
  }
}
class Pause extends React.Component {
  render () {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="16" height="16"></rect>
        {/* <rect x="14" y="4" width="4" height="16"></rect> */}
      </svg>
    )
  }
}
@withRouter
export default class Main extends Component {
  state = {
    stop: false
  }
  constructor (props) {
    super(props)
    this.goNext = this.goNext.bind(this)
    this.goPrev = this.goPrev.bind(this)
    this.toggleChecked = this.toggleChecked.bind(this)
    this.swiper = null
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
      mouse.y = e.clientY
    }, false)
  }

  goNext = () => {
    console.log('next')
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }

  toggleChecked = () => {
    if (this.swiper) {
      // this.swiper.slidePrev()
      this.setState({stop: !this.state.stop})
    }
  }
  render () {
    let match = process.env.NODE_ENV !== 'production' ? '/' : ''
    console.log(match)
    const params = {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    return (
      <StyleRoot>
        <LogoWrapper>
          <img src={logoSrc} />
        </LogoWrapper>

        <SwiperWrapper>
          <Swiper
            {...params}
            // eslint-disable-next-line
            ref={node => this.swiper = node !== null ? node.swiper : null }>
            <AlbumWrapper>
              <CoverTitle>
                <h3>Baby, You're A Rich Man</h3>
                <h4>The Beatles</h4>
              </CoverTitle>
              <Cover bgSrc={album1}>
                <img src={require('assets/image/a1.jpg')} />
              </Cover>
            </AlbumWrapper>
            <AlbumWrapper>
              <CoverTitle>
                <h3>Sunshine</h3>
                <h4>Tom Misch</h4>
              </CoverTitle>
              <Cover bgSrc={album2}>
                <img src={require('assets/image/a2.jpg')} />
              </Cover>
            </AlbumWrapper>
            <AlbumWrapper>
              <CoverTitle>
                <h3>Fish</h3>
                <h4>Crowd Lu</h4>
              </CoverTitle>
              <Cover bgSrc={album4}>
                <img src={require('assets/image/a4.jpg')} />
              </Cover>
            </AlbumWrapper>

            <AlbumWrapper>
              <CoverTitle>
                <h3>South of the River</h3>
                <h4>Tom Misch</h4>
              </CoverTitle>
              <Cover bgSrc={album3}>
                <img src={require('assets/image/a3.jpg')} />
              </Cover>
            </AlbumWrapper>
          </Swiper>
          <ButtonGroup>
            <SongButton onClick={this.goPrev}><ChevronsLeft/></SongButton>
            <SongButton size={'45px'} style={{marginLeft: '6px'}} onClick={this.toggleChecked}>
              <MorphReplace duration={400} width={45} height={45}>
                {this.state.stop ? <Play key="Play" /> : <Pause key="Pause" />}
              </MorphReplace>
            </SongButton>
            <SongButton onClick={this.goNext}><ChevronsRight/></SongButton>
          </ButtonGroup>
        </SwiperWrapper>
        {/* bubble */}
        <BubbleCanvas id='canvas' style={{ display: 'none' }}></BubbleCanvas>
        <svg style={{ width: 0, height: 0 }} xmlns='http://www.w3.org/2000/svg' version='1.1'>
          <defs>
            <filter id='goo'>
              <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
              <feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -9'/>
            </filter>
          </defs>
        </svg>
        {/* bubble */}
      </StyleRoot>
    )
  }
}
// http://albums.world/media/vinyl.png
