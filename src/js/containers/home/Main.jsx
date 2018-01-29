import 'babel-polyfill'
import React, { Component } from 'react'
import styled from 'styled-components'
import Containers from 'containers'
import { withRouter } from 'react-router-dom'
import Swiper from 'react-id-swiper'
import { breakpoint } from 'js/style/utils.js'
import _ from 'lodash'
import store from 'store2'
import { serverUrl } from 'js/utils/ServerConfig'

let album1 = require('assets/image/b1.png')
let album2 = require('assets/image/b2.jpg')
let album3 = require('assets/image/b3.jpg')
let album4 = require('assets/image/b4.jpg')

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

@withRouter
export default class Main extends Component {
  state = {
    swiper: null,
    thumbnailSwiper: null,
    albumIndex: 0,
    profile: ''
  }

  componentDidMount () {
    let search = this.props.location.search
    let params = new URLSearchParams(search)
    let code = params.get('code')
    console.log(code, serverUrl)

    if (_.size(code) > 0) {
      // if get code
      let url = `${serverUrl}/auth?code=${this.props.location.search.slice(6)}`
      fetch(url)
        .then(res => res.json())
        .then(result => {
          console.log('res', result)
          store.set('accessToken', result.access_token)
          store.set('profile', result.profile)
          this.setState({
            profile: result.profile
          })
        }, (error) => {
          console.log('err', error)
        }
      )
    } else {
      // check prev accessToken & token
      let _profile = store.get('profile')
      this.setState({
        profile: _profile !== null ? _profile : ''
      })
    }
  }
  setAlbumIndex = (index) => {
    this.setState({
      albumIndex: index
    })
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
    const params = {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    return (
      <StyleRoot>

        <Containers.ui.Header profile={this.state.profile}/>

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

          <Containers.ui.Player
            albumIndex={this.state.albumIndex}
            setAlbumIndex={this.setAlbumIndex}
            swiper={this.swiper}
          />
        </SwiperWrapper>

        <Containers.ui.AlbumPreviewList
          albumIndex={this.state.albumIndex}
          setAlbumIndex={this.setAlbumIndex}
          swiper={this.swiper}
        />
        <Containers.ui.Footer />

        <Containers.ui.Bubble/>

      </StyleRoot>
    )
  }
}
