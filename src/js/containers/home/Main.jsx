import 'babel-polyfill'
import React, { Component } from 'react'
import styled from 'styled-components'
import Containers from 'containers'
import { withRouter } from 'react-router-dom'
import Swiper from 'react-id-swiper'
import { breakpoint } from 'js/style/utils.js'
import { ChevronsLeft, ChevronsRight } from 'react-feather'
import ReactPlayer from 'react-player'
import { MorphReplace } from 'react-svg-morph'
import _ from 'lodash'
import store from 'store2'
import { serverUrl } from 'js/utils/ServerConfig'

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
    playing: false,
    played: 0,
    duration: 0,
    seeking: false
  }

  componentDidMount () {
    let search = this.props.location.search
    let params = new URLSearchParams(search)
    let code = params.get('code')
    console.log(code, serverUrl)
    if (_.size(code) > 0) {
      let url = `${serverUrl}/auth?code=${this.props.location.search.slice(6)}`
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
  onProgress = state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
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

        <Containers.ui.Header />

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
                    id: id,
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
                {this.state.playing ? <Pause key="Pause" /> : <Play key="Play" />}
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

        <Containers.ui.Footer />
        {/* modal */}
        {/* bubble */}
        <Containers.ui.Bubble />
        {/* bubble */}
      </StyleRoot>
    )
  }
}
