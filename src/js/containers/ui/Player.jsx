import 'babel-polyfill'
import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { breakpoint } from 'js/style/utils.js'
import { ChevronsLeft, ChevronsRight } from 'react-feather'
import ReactPlayer from 'react-player'
import { MorphReplace } from 'react-svg-morph'

let mp3Src1 = 'https://soundcloud.com/lxzwg2zjxk1t/with-you' // require('assets/song/song1.mp3')
let mp3Src2 = 'https://soundcloud.com/lxzwg2zjxk1t/hg2mlehvl0l8' // require('assets/song/song2.mp3')
let mp3Src3 = 'https://soundcloud.com/lxzwg2zjxk1t/4ug3czy5pkby' // require('assets/song/song3.mp3')
let songList = [
  mp3Src1,
  mp3Src2,
  mp3Src3
]
import 'js/style/musicRange.js'

const PlayerWrapper = styled.div`
  z-index: 1;
  width: 100%;
  /* height: 600px; */
  height: auto;
  padding: 20px 0;

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
    url: mp3Src1,
    playing: false,
    played: 0,
    duration: 0,
    seeking: false
  }

  goNext = () => {
    if (this.props.albumIndex === 3) return
    if (this.props.swiper) this.props.swiper.slideNext()
    this.props.togglePlaying(true)
    this.load(songList[this.props.albumIndex + 1])
    this.props.setAlbumIndex((this.props.albumIndex + 1) % 4)

    console.log(this.props.albumIndex, songList[this.props.albumIndex + 1])
  }
  goPrev = () => {
    if (this.props.albumIndex === 0) return
    if (this.props.swiper) this.props.swiper.slidePrev()
    this.props.togglePlaying(true)
    this.load(songList[this.props.albumIndex - 1])
    this.props.setAlbumIndex((this.props.albumIndex - 1) % 4)

    console.log(this.props.albumIndex, songList[this.props.albumIndex - 1])
  }
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
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
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0
    })
  }
  ref = player => {
    this.player = player
  }

  render () {
    console.log(this.props)
    return (
      <PlayerWrapper>

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
          url={this.state.url}
          onProgress={this.onProgress}
          playing={this.props.playing} />

        <ButtonGroup>
          <SongButton onClick={this.goPrev}><ChevronsLeft/></SongButton>
          <SongButton size={'45px'} style={{marginLeft: '6px'}} onClick={() => {
            this.props.togglePlaying(this.props.playing)
            this.load(songList[this.props.albumIndex])
          }}>
            <MorphReplace duration={400} width={45} height={45}>
              {this.props.playing ? <Pause key="Pause" /> : <Play key="Play" />}
            </MorphReplace>
          </SongButton>
          <SongButton onClick={this.goNext}><ChevronsRight/></SongButton>
        </ButtonGroup>

      </PlayerWrapper>
    )
  }
}
