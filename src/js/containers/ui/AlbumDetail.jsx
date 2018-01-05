import 'babel-polyfill'
import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
// import { fontSize } from 'js/style/font.js'
import ReactRevealText from 'react-reveal-text'
import colors from 'js/style/colors.js'
import { X } from 'react-feather'
import ReactPlayer from 'react-player'

const DetailWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  // height: 100vh;
  height: fit-content;
  opacity: 0;
  border: 5px solid ${colors.bg_blue};
  border-radius: 25%;
  transform: scale(0.5);
  transition: all 0.35s ease;
  background: ${colors.bg_blue};

  display: block;

  &.active {
    border-radius: 0;
    transform: scale(1);
    opacity: 1;
  }
`
const Info = styled.div`
  width: 60vw;
  height: fit-content;
  padding: 20px;
  max-width: 1024px;
`
const Video = styled.div`
  width: 60vw;
  height: calc((60vw - 0px) * 9 / 16);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1024px;
  max-height: calc((1024px - 0px) * 9 / 16);

  > * {
    width: 100%;
    flex: 1;
  }
  margin-top: 40px;
`
const CloseBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  content: '';
  color: white;
  transition: all 0.25s ease;
  background: rgba(104, 104, 104, 0.96);

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    transition: all 0.25s ease;
    background: rgba(50, 50, 50, 0.96);
  }
`
const StyledRevealText = styled(ReactRevealText)`
  color: white;
  font-size: 36px;
  line-height: 36px;
  font-family: 'sans-serif';
  letter-spacing: 3px;
  padding-left: 3px;
  margin-bottom: 10px;

  span {
    font-size: 36px;
    line-height: 36px;
  }
`
const Header = StyledRevealText.extend`
  font-size: 50px;
  line-height: 50px;
  span {
    font-size: 50px;
    font-weight: bold;
    line-height: 50px;
  }
  color: ${colors.bg_blue};
`
const Subtitle = StyledRevealText.extend`
  font-size: 36px;
  line-height: 36px;
  span {
    font-size: 36px;
    line-height: 36px;
  }
  color: ${colors.bg_blue};
  margin-bottom: 20px;
`
const Seperator = styled.div`
  width: 40px;
  height: 2.5px;
  background: ${colors.bg_blue};
  margin: 5px 0;
  display: none;
`
const Content = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  overflow: scroll;
  padding: 0 20px 50px 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const Detail = styled.p`
  font-size: 16px;
  line-height: 16px;
  opacity: 0;

  color: #50514F;
  text-align: justify;
  line-height: 1.5;
  font-weight: 200;
  letter-spacing: 1px;
  transform: translateX(-10px);

  &.active {
    transform: translateX(0px);
    transition: all 1s ease 0.5s;
    opacity: 1;
  }
`
const DetailBtn = styled.div`
  width: 180px;
  margin: 10px 0;
  padding: 10px 30px;
  background: transparent;
  color: ${colors.bg_blue};
  border: 2px solid ${colors.bg_blue};
  border-radius: 50px;
  text-align: center;
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
`
const BackgroundLineGroup = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  width: calc(100vw - 10px);
  height: 100%;
  // background: #CC443D;
  background: #FFB6A5;
  z-index: -1;
  display: flex;
`
const Line = styled.div`
  border-left: 1px solid rgba(29, 43, 111, 0.5);
  flex: 1;
  margin-left: 90px;
`
@withRouter
export default class AlbumWrapper extends Component {
  state = {
    revealText: false
  }
  componentDidMount () {
    this.setState({
      revealText: true
    })
  }
  hide = () => {
    this.props.hide()
  }
  render () {
    return (
      <DetailWrapper className={this.state.revealText ? 'active' : null}>
        <CloseBtn onClick={this.hide}><X/></CloseBtn>
        <BackgroundLineGroup>
          <Line />
          <Line />
          <Line />
          <Line />
          <Line />
        </BackgroundLineGroup>
        <Content>
          <Video>
            <ReactPlayer
              // controls={true}
              width={'100%'}
              height={'auto'}
              url='https://youtu.be/nEJk2FJJ18c?t=15s'
              playing={false} />
          </Video>
          <Info>
            <Header
              show={this.state.revealText}
              text={'South of the River'}
              delayMin={100}
              delayMax={1000}
              transitionTime={150} />
            <Subtitle
              show={this.state.revealText}
              text={'Tom Mischl'}
              delayMin={100}
              delayMax={1000}
              transitionTime={150} />
            <Seperator />
            <DetailBtn onClick={() => this.show()}>Vote 投我一票</DetailBtn>
            <Detail className={this.state.revealText ? 'active' : null}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Detail>
            <Detail className={this.state.revealText ? 'active' : null}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Detail>
            <Detail className={this.state.revealText ? 'active' : null}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Detail>
          </Info>
        </Content>

      </DetailWrapper>
    )
  }
}
