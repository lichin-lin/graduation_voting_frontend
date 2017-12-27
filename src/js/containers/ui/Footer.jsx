import 'babel-polyfill'
// import Containers from 'containers'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import Actions from 'js/actions'
import colors from 'js/style/colors.js'
import styled from 'styled-components'
import { fontSize } from 'js/style/font.js'
import { squareBase, breakpoint } from 'js/style/utils.js'

const FooterWrapper = styled.div`
  width: 100%;
  height: auto;
  background: ${colors.footerGray};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 100px;
  @media screen and (max-width: ${breakpoint.tablet}) {
    padding: 10px 20px;
  }
`
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${breakpoint.tablet}) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
const Section = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.white};
  a,
  p,
  span {
    font-size: ${fontSize.p2};
  }
  span&:nth-child(1) {
    margin: 0 ${squareBase * 4}px;
  }
  span.withPadding {
    margin: 0 10px;
  }
  a {
    cursor: pointer;
  }
  @media screen and (max-width: ${breakpoint.tablet}) {
    &:nth-child(1) {
      margin-bottom: 20px;
    }
    div {
      display: flex;
      flex-direction: column;
      span {
        margin: 2.5px 0;
      }
    }
  }
`
const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch) => ({
  setLang: (lang) => dispatch(Actions.Utils.setLang(lang))
})

@connect(mapStateToProps, mapDispatchToProps)
export default class Footer extends Component {
  setLang = (lang) => {
    this.props.setLang(lang)
  }
  render () {
    return (
      <FooterWrapper>
        <Content>
          <Section>
            <a onClick={() => this.setLang('ch')}>中文</a>
            <span className="withPadding"> | </span>
            <a onClick={() => this.setLang('en')}>English</a>
          </Section>
          <Section>
            <div>
              <span>Copyright © 2017</span><span>國立交通大學人機互動中心 All rights reserved.</span>
            </div>
          </Section>
        </Content>
      </FooterWrapper>
    )
  }
}
