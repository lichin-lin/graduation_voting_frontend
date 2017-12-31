import 'babel-polyfill'
import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { breakpoint } from 'js/style/utils.js'
import { fontSize } from 'js/style/font.js'
let vinyl = require('assets/image/vinyl.png')
import ReactModal from 'react-modal'

ReactModal.setAppElement('#app')

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
    left: 20vw;
    width: 50vw;
    height: 50vw;
    max-width: 480px;
    max-height: 480px;
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
const StyledReactModal = styled(ReactModal)`
  top: 0;
  left: 0;
  background: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  .ReactModal__Content {
    top: 0;
    left: 0;
    background: white;
    width: 100vw;
    height: 100vh;
  }
`
@withRouter
export default class Album extends Component {
  constructor (props) {
    super(props)
    this.state = { visible: false }
  }

  show = () => {
    this.setState({ visible: true })
  }

  hide = () => {
    console.log('hide')
    this.setState({ visible: false })
  }

  render () {
    return (
      <AlbumWrapper
        onClick={() => this.show()}
        className="swiper-slide">
        <CoverTitle>
          <h3>South of the River</h3>
          <h4>Tom Misch</h4>
        </CoverTitle>

        <Cover bgSrc={this.props.data.coverSrc}>
          <img src={this.props.data.coverSrc} />
        </Cover>

        <StyledReactModal
          style={{
            overlay: {zIndex: '1', backgroundColor: 'rgba(100, 100, 100, 0.5)'},
            content: {color: '#50514F'}
          }}
          // closeTimeoutMS={150}
          isOpen={this.state.visible}
          onRequestClose={this.hide}
          contentLabel="Modal">
          <h1 onClick={this.hide}>Modal Content</h1>
        </StyledReactModal>

      </AlbumWrapper>
    )
  }
}
