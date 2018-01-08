import 'babel-polyfill'
import React, { Component } from 'react'
import colors from 'js/style/colors.js'
import styled from 'styled-components'
import { breakpoint } from 'js/style/utils.js'
let peopleSrc = require('assets/image/people.png')

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
export default class Footer extends Component {
  render () {
    return (
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
    )
  }
}
