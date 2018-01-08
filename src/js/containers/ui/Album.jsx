import 'babel-polyfill'
import React, { Component } from 'react'
import Containers from 'containers'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { breakpoint } from 'js/style/utils.js'
import { fontSize } from 'js/style/font.js'
import colors from 'js/style/colors.js'
import ReactModal from 'react-modal'

let vinyl = require('assets/image/vinyl.png')
ReactModal.setAppElement('#app')

const AlbumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;

  > img {
    width: 100%;
    height: auto;
  }
`
const Cover = styled.div`
  width: 35vw;
  height: 35vw;
  max-width: 480px;
  max-height: 480px;
  background-image: url(${props => props.bgSrc ? props.bgSrc : ''});
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
    top: 0;
    left: 12.5vw;
    width: 35vw;
    height: 35vw;
    max-width: 400px;
    max-height: 400px;
    position: absolute;
    background-image: url(${vinyl});
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
const DetailBtn = styled.div`
  margin: 10px 0;
  padding: 12px 40px;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 50px;
  font-size: ${fontSize.p1};
  line-height: 18px;
  cursor: pointer;
`
const StyledReactModal = styled(ReactModal)`
  top: 0;
  left: 0;
  // background: white;
  // background: ${colors.bg_blue};
  background: transparent;
  width: 100vw;
  height: 100vh;
  display: flex;

  .ReactModal__Content {
    top: 0;
    left: 0;
    background: white;
    width: 100vw;
    height: fit-content;
  }
  h1 {
    font-size: 36px;
  }
  h2 {
    font-size: 24px;
  }
  .ReactModal__Overlay {
    overflow: scroll;
  }
`

@withRouter
export default class Album extends Component {
  state = {
    visible: false
  }
  show = () => {
    this.setState({ visible: true })
  }
  hide = () => {
    this.setState({ visible: false })
  }

  render () {
    console.log(this.props)
    return (
      <AlbumWrapper
        className='swiper-slide'>

        <CoverTitle>
          <h3>{this.props.data.title}</h3>
          <h4>{this.props.data.group}</h4>
        </CoverTitle>

        <DetailBtn onClick={() => this.show()}>查看歌曲</DetailBtn>
        <Cover bgSrc={this.props.data.coverSrc}>
          <img src={this.props.data.coverSrc} />
        </Cover>

        <StyledReactModal
          style={{
            overlay: {zIndex: '1', backgroundColor: 'transparent', overflow: 'scroll'},
            content: {color: '#50514F'}
          }}
          // closeTimeoutMS={150}
          onClick={this.hide}
          isOpen={this.state.visible}
          onRequestClose={this.hide}
          contentLabel="Modal">

          <Containers.ui.AlbumDetail
            id={this.props.data.id + 1}
            hide={this.hide}
          />
        </StyledReactModal>

      </AlbumWrapper>
    )
  }
}
