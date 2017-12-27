import 'babel-polyfill'
// import Containers from 'containers'
import React, { Component } from 'react'
import colors from 'js/style/colors.js'
import styled from 'styled-components'
import { fontSize } from 'js/style/font.js'
import { squareBase, breakpoint } from 'js/style/utils.js'

const ImageWrapper = styled.div`
  padding: ${squareBase * 4}px ${squareBase * 4}px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${colors.white};
  @media screen and (max-width: ${breakpoint.tablet}) {
    height: 100%;
  }

  h4 {
    margin: 0;
    color: ${colors.headerGray};
    font-size: ${fontSize.h4};
  }
  span {
    color: ${colors.blackLight};
    letter-spacing: 0.75px;
    font-size: ${fontSize.s1};
    line-height: calc(${fontSize.s1} * 1.5);
  }
  p {
    margin: 10px 0;
    color: ${colors.headerGray};
    letter-spacing: 0.75px;
    font-size: ${fontSize.p1};
    line-height: calc(${fontSize.p1} * 1.5);
  }
  a {
    margin-top: 20px;
  }
`
const Image = styled.div`
  display: inline-block;
  width: 100%;
  height: 275px;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.bgSrc ? props.bgSrc : ''});
`
export default class PeopleImage extends Component {
  render () {
    return (
      <ImageWrapper>
        <div>
          <Image bgSrc={this.props.photo} />
          <h4>{this.props.name}</h4>
          <span>{this.props.type}</span>
          <p>{this.props.brief}</p>
        </div>
        <div>
          <a href={this.props.link} target="_blank">個人網站</a>
        </div>
      </ImageWrapper>
    )
  }
}
