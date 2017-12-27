import 'babel-polyfill'
// import Containers from 'containers'
import React, { Component } from 'react'
import colors from 'js/style/colors.js'
import styled from 'styled-components'
import { fontSize, fontFamily } from 'js/style/font.js'
import { squareBase } from 'js/style/utils.js'

const ButtonWrapper = styled.div`
  margin: 5px 0;
  width: 100%;
  border: none;
  cursor: pointer;
  position: relative;
  background: ${colors.ci};
  padding: ${squareBase * 2}px;

  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${fontSize.p2};
  font-family: ${fontFamily.defaultFontMedium};

  &:before,
  &:after {
    top: -3px;
    left: 0;
    width: 100%;
    height: 1px;
    content: '';
    background: ${colors.black};
    position: absolute;
  }

  &:after {
    top: inherit;
    bottom: -4px;
  }
`
export default class MoreButton extends Component {
  render () {
    return (
      <ButtonWrapper
        onClick={this.props.onClick}>
        {this.props.content ? this.props.content : ''}
      </ButtonWrapper>
    )
  }
}
