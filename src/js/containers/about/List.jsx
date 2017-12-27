import React, {Component} from 'react'
import styled from 'styled-components'
import colors from 'js/style/colors.js'
import { fontSize } from 'js/style/font.js'
import Containers from 'containers'
import { fakeData } from './data.js'
import { breakpoint } from 'js/style/utils.js'
import _ from 'lodash'

const StyleRoot = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background: ${colors.grey};
  /* theme */
  padding: 50px 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
const Content = styled.div`
  width: 100%;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${breakpoint.tablet}) {
    padding: 0 10px;
  }
`
const Section = styled.div`
  flex: 1;
  width: 100%;
  margin: 20px 0;
  max-width: ${props => props.maxWidth ? props.maxWidth : '100%'};
`
const Title = styled.div`
  margin-bottom: 30px;
`
const Body = styled.div`
  width: 100%;
  padding: 5px 0px;
  position: relative;
  display: flex;
  flex-direction: column;

  &:before,
  &:after {
    top: -10px;
    left: 0px;
    position: absolute;
    width: 100%;
    height: 1px;
    content: '';
    background: ${colors.black};
  }
  &:after {
    top: inherit;
    bottom: -10px;
  }
`
const BodyWrapper = styled.div`
  display: flex;
  margin: 10px 0px;
  background: white;
  padding: 20px 25px;
  @media screen and (max-width: ${breakpoint.tablet}) {
    padding: 20px 10px;
  }
`
const BodyContent = styled.div`
  min-height: 100px;
  width: 100%;
  padding: 0 10px;
  div {
    p {
      font-size: ${fontSize.p1};
      margin: 0 0 20px 0;
      word-break: break-all;
    }
    h4 {
      font-size: ${fontSize.h4};
    }
    ol {
      li {
        font-size: ${fontSize.p1};
      }
    }
  }
`
export default class List extends Component {
  state = {
    data: fakeData
  }
  render () {
    let match = process.env.NODE_ENV !== 'production' ? '/' : ''
    return (
      <StyleRoot>
        <Content>
          {
            _.map(this.state.data, (el) =>
              <Section
                key={el.id}
                maxWidth={'1280px'}>
                <Title>
                  <Containers.ui.TitleLabel
                    direction={'left'}
                    content={el.category}/>
                </Title>
                <Body>
                  {
                    _.map(el.list, (_listData) =>
                    <BodyWrapper key={_listData.id}>
                      {/* <BodyTitle>
                        <div>
                          <h4>{_listData.title}</h4>
                        </div>
                        <div>
                          <p>永久課號: {_listData.no}</p>
                          <p>選別: {_listData.type}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{_listData.credit}</p>
                          <p>開課教師: {_listData.teacher}</p>
                          <a href={_listData.link} target="_blank">課程大綱</a>
                        </div>
                      </BodyTitle> */}
                      <BodyContent>
                        <div
                          className="sectionContent">
                          <p>&nbsp;&nbsp;&nbsp;&nbsp;國立交通大學人機互動中心成立於 2017年12月，是全國第一個以人機互動（Human Computer Interaction，簡稱HCI）作為核心研究暨教學中心。由資訊學院、客家文化學院、管理學院、人文社會學院等人機互動領域相關專業學者與老師組成，結合各領域資源，專注於人機互動相關領域發展之研究機構，研究領域包括：資訊、傳播、心理、人因、設計、藝術、社會學。本中心之研究成果，能直接應用在設計及開發人性化的科技數位互動產品。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;本中心之研究主題分為九大項目：普及運算、智慧使用者介面、互動設計創新、群眾外包、電腦輔助溝通、VR/AR、使用者體驗，並在多位專家學者的努力下在各主題中皆有豐富之研究成果，於多個國際頂尖會議、期刊大放異彩。<a style={{ color: '#117bf3', cursor: 'pointer' }} onClick={() => { this.props.history.push(`${match}/research`) }}>(Learn more)</a></p><p>&nbsp;&nbsp;&nbsp;&nbsp;本中心也同時致力於推廣針對未來科技趨勢及社會對使用者經驗的高度需求所設計的人機互動專業課程。完成 HCI 系列課程的學生能夠具備思辨、批判思考和深度探討問題的能力，學會把創意發想建構在「問題－解決」（Problem-Solution）的前提上，以更務實與邏輯的方法解決問題。本中心期待透過此系列課程培養出同時具有設計思考與研究批判能力的科技領袖，開發出符合使用者需求且同時改善人類生活、解決社會議題的數位科技。</p>
                        </div>
                      </BodyContent>
                    </BodyWrapper>
                    )
                  }
                </Body>
              </Section>
            )
          }
        </Content>
      </StyleRoot>
    )
  }
}
