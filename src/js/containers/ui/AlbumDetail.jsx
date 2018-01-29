import 'babel-polyfill'
import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { breakpoint } from 'js/style/utils.js'
// import { fontSize } from 'js/style/font.js'
import ReactRevealText from 'react-reveal-text'
import colors from 'js/style/colors.js'
import { X } from 'react-feather'
// import ReactPlayer from 'react-player'

const DetailWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100vh;
  // height: fit-content;
  opacity: 0;
  border: 5px solid ${colors.bg_blue};
  border-radius: 25%;
  transform: scale(0.5);
  transition: all 0.35s ease;
  background: ${colors.bg_blue};

  display: block;
  // display: flex;
  //align-items: center;

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
  @media screen and (max-width: ${breakpoint.tablet}) {
    width: 80vw;
  }
`
// const Video = styled.div`
//   width: 60vw;
//   height: calc((60vw - 0px) * 9 / 16);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   max-width: 1024px;
//   max-height: calc((1024px - 0px) * 9 / 16);
//   @media screen and (max-width: ${breakpoint.tablet}) {
//     width: 80vw;
//     height: calc((80vw - 0px) * 9 / 16);
//   }
//   > * {
//     width: 100%;
//     flex: 1;
//   }
//   margin-top: 40px;
// `
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
  @media screen and (max-width: ${breakpoint.tablet}) {
    font-size: 1.75em;
    line-height: 1em;
    span {
      font-size: 1.75em;
      line-height: 1em;
    }
  }
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
  @media screen and (max-width: ${breakpoint.tablet}) {
    font-size: 1.25em;
    line-height: 1em;
    span {
      font-size: 1.25em;
      line-height: 1em;
    }
  }
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
  // padding: 0 20px 50px 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const Detail = styled.p`
  font-size: 16px;
  line-height: 16px;
  opacity: 1;

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
const ContentWrapper = styled.div`
  opacity: 0;

  &.active {
    transform: translateX(0px);
    transition: all 1s ease 0.5s;
    opacity: 1;
  }
`
const BackgroundLineGroup = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  width: calc(100vw - 10px);
  height: 100%;
  background: #FFD8D8;
  // background: #E0FCFF;
  z-index: -1;
  display: flex;
`
const Break = styled.div`
  height: 20px;
  width: 100%;
`

const Line = styled.div`
  border-left: 1px solid rgba(29, 43, 111, 0.25);
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
          {/* <Video>
            <ReactPlayer
              // controls={true}
              width={'100%'}
              height={'auto'}
              url='https://youtu.be/nEJk2FJJ18c?t=15s'
              playing={false} />
          </Video> */}
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
            <ContentWrapper
              className={this.state.revealText ? 'active' : null}
              style={{
                display: 'flex',
                height: '80vh'
              }}>

              <div style={{ flex: 1 }}>
                <Detail>
                  飄雨的午後，隨著雨珠點點滴滴的打在的，
                </Detail>
                <Detail>
                  是我紛亂的不捨的心
                </Detail>
                <Detail>
                  走在混亂的街，忽然入耳的，是這麼一段旋律
                </Detail>
                <Detail>
                  伴隨這緩緩的樂音，訴說著悠悠的未來，
                </Detail>
                <Detail>
                  喜歡這暖暖的文字，洋溢著滿滿的幸福。
                </Detail>
                <Break />

                <Detail>
                  隨著旋律的起伏，思緒由前至後，由上到下，由遠到近，
                </Detail>
                <Detail>
                  那是一個穿梭時空的迷幻的知覺，
                </Detail>
                <Detail>
                  血液正在加速竄流於全身，撲通撲通撲通，動次動次動次，
                </Detail>
                <Detail>
                  鼓聲在我血液中，抨擊著！
                </Detail>
                <Detail>
                  歌聲在我血液中，奔放著！
                </Detail>
                <Break />

                <Detail>
                  滾燙的熱淚緩緩流下，
                </Detail>
                <Detail>
                  炙熱的太陽緩緩地從雲間透出，
                </Detail>
                <Detail>
                  漸漸地打亮著我的臉龐，
                </Detail>
                <Detail>
                  我緩緩唱著歌，今年我們要畢業了。
                </Detail>
              </div>

              <div style={{ flex: 1, marginLeft: '50px' }}>
                <Detail>一提到交大校園階級</Detail>
                <Detail>就是學妹學長校狗學弟</Detail>
                <Detail>不要 走心</Detail>
                <Detail>請你看看路上男女比</Detail>

                <Detail>一開學就在期待放假</Detail>
                <Detail>e3的作業待繳從沒停下</Detail>
                <Detail>期中 爆炸</Detail>
                <Detail>期末只好跪著求學霸</Detail>

                <Detail>就這樣一年過了一年</Detail>
                <Detail>還是要揪團打lol吃吃宵夜</Detail>
                <Detail>別再 熬夜</Detail>
                <Detail>還要帶著肝進台積電</Detail>

                <Detail>問自己四年有沒有變</Detail>
                <Detail>是否該帶一些回憶紀念</Detail>
                <Detail>浩然 過夜</Detail>
                <Detail>或是搭訕學妹約逛校園</Detail>

                <Detail>從交大畢業</Detail>
                <Detail>往夢想起飛</Detail>
                <Detail>路途再遙遠</Detail>
                <Detail>我還有你陪</Detail>

                <Detail>回首這四年</Detail>
                <Detail>有歡笑淚水</Detail>
                <Detail>別害怕離別</Detail>
                <Detail>要勇往直前</Detail>

                <Detail>記得剛上大一心裡有多少憧憬</Detail>
                <Detail>只看名字選課也不管教授鬆緊</Detail>
                <Detail>想像自己要看遍 所有的風景</Detail>
                <Detail>明天微積分會考 哦 那是什麼東西</Detail>

                <Detail>暑假辦過的營隊 努力不是為了名位</Detail>
                <Detail>這過程 有笑有淚 有high有醉</Detail>
                <Detail>有過台下的掌聲  也有過爭吵的心碎</Detail>
                <Detail>多少風風雨雨 我們都一起面對</Detail>

                <Detail>難道長大就是痛苦 沒人理解的痛楚</Detail>
                <Detail>只想爬到高處 新的高度 不想跌回低谷</Detail>
                <Detail>曾經的homie 都不在 只有自己 能依賴</Detail>
                <Detail>別想要 沒有準備 就去應對 不是每次都能靠賽</Detail>

                <Detail>種種回憶如此寶貴 追夢的心不曾倒退</Detail>
                <Detail>希望到了以後 還能保持原有的純粹</Detail>
                <Detail>面對未來不會再慫 無理的要求不再聽從</Detail>
                <Detail>曾經我以交大為榮 畢業後交大以我為榮</Detail>

                <Detail>從交大畢業 (It’s time to graduate)</Detail>
                <Detail>往夢想起飛 (Find your own way)</Detail>
                <Detail>路途再遙遠 (Please don’t be afraid)</Detail>
                <Detail>我還有你陪 (That’s needless to say)</Detail>

                <Detail>回首這四年 (想要對你說的話）</Detail>
                <Detail>有歡笑淚水 (全部放在心裏底）</Detail>
                <Detail>別害怕離別 (有我跟你黏作伙）</Detail>
                <Detail>要勇往直前 (不管困難有多少）</Detail>

                <Detail>傳情我都傳給自己當作安慰</Detail>
                <Detail>室友不但死會還可以拿卷</Detail>
                <Detail>但還好我還有一群好同學</Detail>
                <Detail>可以陪我一起魯一起耍廢</Detail>
              </div>
            </ContentWrapper>

          </Info>
        </Content>

      </DetailWrapper>
    )
  }
}
