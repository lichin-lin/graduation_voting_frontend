import 'babel-polyfill'
// import Containers from 'containers'
import React, { Component } from 'react'
import colors from 'js/style/colors.js'
import styled from 'styled-components'
import { fontSize } from 'js/style/font.js'
import { squareBase } from 'js/style/utils.js'

const ParagraphWrapper = styled.div`
  padding: ${squareBase * 5}px ${squareBase * 10}px;
  width: 100%;
  height: 100%;
  background: ${colors.white};
`
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  color: ${colors.headerGray};
  .sectionContent {
    font-size: ${fontSize.p1};
    line-height: calc(${fontSize.p1} * 1.5);
    > h4 {
      color: ${colors.headerGray};
      font-size: ${fontSize.h4};
      margin-bottom: 20px;
    }
    > p, a {
      color: ${colors.headerGray};
      letter-spacing: 0.75px;
      font-size: ${fontSize.p1};
      line-height: calc(${fontSize.p1} * 1.5);
      margin: 10px 0;
      overflow-wrap: break-word;
    }
    > ol {
      margin: 0;
      padding-left: 20px;
      -webkit-padding-start: 20px;
      li {
        margin: 0;
        letter-spacing: 0.75px;
        font-size: ${fontSize.p1};
        line-height: calc(${fontSize.p1} * 1.5);
      }
    }
  }
  section {
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 25%;
      padding: 10px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`
const NewsTitle = styled.div`
  font-weight: bold;
  font-size: ${fontSize.h2};
`
const NewsSubTitle = styled.div`
  font-weight: bold;
  margin: 0;
  font-size: ${fontSize.h3};
`
const NewsIntro = styled.div`
  display: flex;
  justify-content: space-between;
  > span {
    color: ${colors.blackLight};
    font-size: ${fontSize.p1};
  }
`
export default class NewsParagraph extends Component {
  render () {
    return (
      <ParagraphWrapper>
        <Section>
          <NewsTitle>{this.props.newsTitle}</NewsTitle>
          <NewsSubTitle>{this.props.newsSubTitle}</NewsSubTitle>
          <NewsIntro>
            <span>{this.props.newsType}</span>
            <span>{this.props.newsDate}</span>
          </NewsIntro>
        </Section>
        <Section>
          <div
            className="sectionContent"
            dangerouslySetInnerHTML={{__html: this.props.content}} />
        </Section>
      </ParagraphWrapper>
    )
  }
}
