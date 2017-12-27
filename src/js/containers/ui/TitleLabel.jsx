import 'babel-polyfill'
// import Containers from 'containers'
import React, { Component } from 'react'
import colors from 'js/style/colors.js'
import styled from 'styled-components'
import { fontSize, fontFamily } from 'js/style/font.js'
import { squareBase } from 'js/style/utils.js'

const LabelWrapper = styled.div`
  padding: ${squareBase * 0.5}px ${squareBase * 1.5}px;
  width: fit-content;

  cursor: ${props => props.isCursor ? 'pointer' : 'default'};
  text-transform: uppercase;
  font-size: ${props => props.size === 'small' ? fontSize.h4 : fontSize.h3};
  font-family: ${fontFamily.defaultFontMedium};
  border: 1px solid ${colors.black};
  border-width: 1px ${props => props.direction === 'right' ? '4px' : '1px'} 1px ${props => props.direction === 'left' ? '4px' : '1px'};

`
export default class TitleLabel extends Component {
  render () {
    return (
      <LabelWrapper
        onClick={this.props.onLabelClick}
        size={this.props.size}
        isCursor={this.props.isCursor}
        direction={this.props.direction}>
        {
          this.props.content
          ? <div
            className="sectionContent"
            dangerouslySetInnerHTML={{__html: this.props.content}} />
          : 'About'
        }
      </LabelWrapper>
    )
  }
}
