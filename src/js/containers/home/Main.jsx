import 'babel-polyfill'
import React, { Component } from 'react'
import styled from 'styled-components'
import Containers from 'containers'
import { withRouter } from 'react-router-dom'
import Swiper from 'react-id-swiper'
import colors from 'js/style/colors.js'
import { breakpoint } from 'js/style/utils.js'
// import { fontSize } from 'js/style/font.js'
import { ChevronsLeft, ChevronsRight } from 'react-feather'
import ReactPlayer from 'react-player'
import { MorphReplace } from 'react-svg-morph'
import _ from 'lodash'
import store from 'store2'

let logoSrc = require('assets/image/logo.png')
let titleSrc = require('assets/image/title.png')
let peopleSrc = require('assets/image/people.png')
let album1 = require('assets/image/b1.png')
let album2 = require('assets/image/b2.jpg')
let album3 = require('assets/image/b3.jpg')
let album4 = require('assets/image/b4.jpg')
let mp3Src = 'http://www.sample-videos.com/audio/mp3/crowd-cheering.mp3'
import 'js/style/musicRange.js'

const albumData = [
  {
    src: album1,
    title: 'BangRangGa',
    group: 'Minjae Jung'
  },
  {
    src: album2,
    title: 'LOS HERALDOS NEGROS',
    group: 'Mayte Alvarado'
  },
  {
    src: album3,
    title: 'Forest',
    group: 'Arun Mehmi'
  },
  {
    src: album4,
    title: 'Forest',
    group: 'Arun Mehmi'
  }
]
const StyleRoot = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;
`
const Header = styled.div`
  width: 100%;
  height: auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items:flex-end;
  z-index: 1;
  @media screen and (max-width: ${breakpoint.tablet}) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`
const Navbar = styled.div`
  display: flex;
  > div {
    margin: 0 10px;
    font-weight: normal;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer
  }
  * {
    color: ${colors.ci_yellow};
    text-decoration: none;
    font-family: 'GENJ';
  }
  @media screen and (max-width: ${breakpoint.tablet}) {
    margin-top: 10px;
    > div {
      font-size: 16px;
    }
  }
`
const LogoWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-end;
  > img.logo {
    width: 100px;
    height: auto;
  }
  > img.title {
    margin-left: 10px;
    width: 200px;
    height: auto;
  }
  @media screen and (max-width: ${breakpoint.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img.logo {
      width: 50vw;
      height: auto;
    }
    > img.title {
      margin: 10px 0 0;
      width: 80vw;
    }
  }
`
const Intro = styled.div`
  z-index: 1;
  width: 100%;
  height: auto;
  margin: 100px 0 0;
  display: flex;
  align-items: center;
  > img {
    width: 400px;
    height: auto;
    @media screen and (max-width: ${breakpoint.tablet}) {
      width: 80vw;
    }
  }
  @media screen and (max-width: ${breakpoint.tablet}) {
    margin-top: 100px;
    flex-direction: column-reverse;
  }
`
const IntroContent = styled.div`
  flex: 1;
  padding: 25px;
  color: white;
  font-size: 20px;
  line-height: 40px;
  font-family: 'GENJ';
  h4 {
    font-size: 14px;
    letter-spacing: 1px;
    word-spacing: 5px;
  }
  span {
    margin: 0 2px;
    font-size: 24px;
    line-height: 30px;
    color: ${colors.ci_yellow};
    border-bottom: 2px dashed ${colors.ci_yellow};
    background-image: linear-gradient(black 33%, rgba(255,255,255,0) 0%);
    background-position: right;
    background-size: 1px 3px;
    background-repeat: repeat-y;
    &:hover {
      cursor: pointer;
      color: ${colors.ci_yellow};
    }

    > a {
      text-decoration: none;
      color: ${colors.ci_yellow};
    }
  }
  @media screen and (max-width: ${breakpoint.tablet}) {
    font-size: 18px;
    line-height: 36px;
    span {
      font-size: 20px;
      line-height: 24px;
    }
    h4 {
      font-size: 14px;
      margin: 5px 0;
      line-height: 20px;
    }
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
  /* height: 600px; */
  height: auto;
  padding: 20px 0;

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
    transform: scale(0.35) translateY(-50px);
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

  .swiper-pagination-bullet {
    color: white;
  }
`
const Preview = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  div {
    opacity: 0.35;
    margin: 0 30px;
    h4, p {
      font-size: 10px;
      margin: 0;
      color: white;
      font-weight: normal;
    }
    p {
      margin-bottom: 10px;
    }
    &.active {
      transition: all 0.3s ease;
      opacity: 1;
    }
  }
  @media screen and (max-width: ${breakpoint.tablet}) {
    display: none;
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
const StyledInput = styled.input`
  width: 200px;
  background-size: ${(props => props.value ? props.value * 100 + `%` : `0%`)} 100%;
  @media screen and (max-width: ${breakpoint.tablet}) {
    width: 70vw;
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
    stop: false,
    visible: false,
    swiper: null,
    thumbnailSwiper: null,
    albumIndex: 0,
    playing: true,
    played: 0,
    duration: 0,
    seeking: false
  }

  componentDidMount () {
    // const canvas = document.getElementById('canvas')
    // const context = canvas.getContext('2d')
    // const colorPallete = ['#ff1783', '#17c9ff', '#36ff40']
    //
    // var width = canvas.width = window.innerWidth
    // var height = canvas.height = window.innerHeight
    // var origin = {x: width / 2, y: height / 2}
    // var mouse = {x: width / 2, y: height / 2}
    // var balls = []
    // var count = 0
    // var randomCount = 1
    //
    // window.onresize = () => {
    //   width = canvas.width = window.innerWidth
    //   height = canvas.height = window.innerHeight
    //   origin = {x: width / 2, y: height / 2}
    // }
    //
    // class Ball {
    //   constructor () {
    //     this.x = origin.x
    //     this.y = origin.y
    //     this.angle = Math.PI * 2 * Math.random()
    //     this.vx = (1.3 + Math.random() * 0.3) * Math.cos(this.angle)
    //     this.vy = (1.3 + Math.random() * 0.3) * Math.sin(this.angle)
    //     this.r = 6 + 3 * Math.random()
    //     this.color = colorPallete[Math.floor(Math.random() * colorPallete.length)]
    //   }
    //
    //   update () {
    //     this.x += this.vx
    //     this.y += this.vy
    //     this.r -= 0.01
    //   }
    // }
    //
    // loop()
    // function loop () {
    //   context.clearRect(0, 0, width, height)
    //   if (count === randomCount) {
    //     balls.push(new Ball())
    //     count = 0
    //     randomCount = 5 + Math.floor(Math.random() * 5)
    //   }
    //   count++
    //   for (var i = 0; i < balls.length; i++) {
    //     var b = balls[i]
    //     context.fillStyle = b.color
    //     context.beginPath()
    //     context.arc(b.x, b.y, b.r, 0, Math.PI * 2, false)
    //     context.fill()
    //     b.update()
    //   }
    //
    //   origin.x += (mouse.x - origin.x) * 0.15
    //   origin.y += (mouse.y - origin.y) * 0.15
    //
    //   context.fillStyle = '#ffdd02'
    //   context.beginPath()
    //   context.arc(origin.x, origin.y, 20, 0, Math.PI * 2, false)
    //   context.fill()
    //
    //   removeBall()
    //   requestAnimationFrame(loop)
    // }
    //
    // function removeBall () {
    //   for (var i = 0; i < balls.length; i++) {
    //     var b = balls[i]
    //     if (
    //       b.x + b.r < 0 ||
    //       b.x - b.r > width ||
    //       b.y + b.r < 0 ||
    //       b.y - b.r > height ||
    //       b.r <= 0
    //     ) {
    //       balls.splice(i, 1)
    //     }
    //   }
    // }
    //
    // window.addEventListener('mousemove', (e) => {
    //   mouse.x = e.clientX
    //   mouse.y = e.clientY
    // }, false)
    let search = this.props.location.search
    let params = new URLSearchParams(search)
    let code = params.get('code')
    console.log(code)
    if (_.size(code) > 0) {
      let url = `http://127.0.0.1:5000/auth?code=${this.props.location.search.slice(6)}`
      fetch(url)
        .then(res => res.json())
        .then(result => {
          console.log('res', result)
          store.set('accessToken', result)
        }, (error) => {
          console.log('err', error)
        }
      )
    }
  }

  goNext = () => {
    if (this.state.albumIndex === 3) return
    if (this.swiper) this.swiper.slideNext()
    console.log((this.state.albumIndex + 1) % 4)
    this.setState({
      albumIndex: (this.state.albumIndex + 1) % 4
    })
  }

  goPrev = () => {
    if (this.state.albumIndex === 0) return
    if (this.swiper) this.swiper.slidePrev()
    console.log((this.state.albumIndex - 1) % 4)
    this.setState({
      albumIndex: (this.state.albumIndex - 1) % 4
    })
  }
  moveToAlbum = (id) => {
    this.setState({
      albumIndex: id
    })
    if (this.swiper) this.swiper.slideTo(id)
  }
  toggleChecked = () => {
    if (this.swiper) {
      // this.swiper.slidePrev()
      this.setState({
        stop: !this.state.stop,
        playing: !this.state.playing})
    }
  }
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    console.log(parseFloat(e.target.value))
    this.setState({ played: parseFloat(e.target.value) })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }
  ref = player => {
    this.player = player
  }
  login = () => {
    fetch('https://id.nctu.edu.tw/o/authorize/%3Fclient_id%3DdFo3aTrp02yAzzHgaYNf90IUGe15ASgZfb6Wl2gb%26scope%3Dprofile%26response_type%3Dcode')
      .then(res => res.json())
      .then(result => {
        console.log('res', result)
      }, (error) => {
        console.log('err', error)
      }
    )
  }
  render () {
    let match = process.env.NODE_ENV !== 'production' ? '/' : ''
    console.log(match)
    const params = {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: true,
      // loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    return (
      <StyleRoot>
        <Header>
          <LogoWrapper>
            <img className='logo' src={logoSrc} />
            <img className='title' src={titleSrc} />
          </LogoWrapper>
          <Navbar>
            <div><a href='https://id.nctu.edu.tw/o/authorize/?client_id=dFo3aTrp02yAzzHgaYNf90IUGe15ASgZfb6Wl2gb&scope=profile&response_type=code'>登入</a></div>
            <div><a href="/#about">關於網站</a></div>
          </Navbar>
        </Header>

        <SwiperWrapper>
          <Swiper
            {...params}
            // eslint-disable-next-line
            ref={node => this.swiper = node !== null ? node.swiper : null }>
            {
              _.map(albumData, (album, id) =>
                <Containers.ui.Album
                  key={id}
                  data={{
                    coverSrc: album.src,
                    title: album.title,
                    group: album.group
                  }}/>
              )
            }
          </Swiper>
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <StyledInput
              type='range' min={0} max={1} step='any'
              value={this.state.played}
              onMouseDown={this.onSeekMouseDown}
              onChange={this.onSeekChange}
              onMouseUp={this.onSeekMouseUp}
            />
          </div>

          <ReactPlayer
            style={{ display: 'none' }}
            ref={this.ref}
            url={mp3Src}
            onProgress={this.onProgress}
            playing={this.state.playing} />
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
        {/* modal */}
        <Preview>
          {
            _.map(albumData, (el, id) =>
              <div key={id} className={this.state.albumIndex === id ? 'active' : null} onClick={() => this.moveToAlbum(id)}>
                <p>0{id + 1}</p>
                <h4>{el.title}</h4>
                <h4>- {el.group}</h4>
              </div>
            )
          }
        </Preview>

        <Intro id="about">
          <img className='logo' src={peopleSrc} />
          <IntroContent>
            這是交通大學 107 級畢業歌投票網站，由
            <span><a href='https://www.facebook.com/NCTUgraduate/' target='_blank'>交大畢聯會</a></span>
            所主辦。你可以在聽完這些歌曲後投出你心目中最好的那一首，對了!是要
            <span><a href='https://id.nctu.edu.tw/o/authorize/?client_id=dFo3aTrp02yAzzHgaYNf90IUGe15ASgZfb6Wl2gb&scope=profile&response_type=code'>登入</a></span>
            才能夠投票的噢。如果想要讓周遭朋友知道這個消息，趕快
            <span><a href='https://www.facebook.com/NCTUgraduate/' target='_blank'>大力分享</a></span>
            ，讓更多人知道這些很棒的音樂。
            <h4>
              * website made with love by lichin, design by Green
            </h4>
          </IntroContent>
        </Intro>
        {/* modal */}
        {/* bubble */}
        <BubbleCanvas id='canvas' style={{ display: 'block' }}></BubbleCanvas>
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
