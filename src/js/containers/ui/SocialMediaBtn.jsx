import 'babel-polyfill'
// import Containers from 'containers'
import React, { Component } from 'react'
// import colors from 'js/style/colors.js'
import styled from 'styled-components'

const LabelWrapper = styled.div`
  border-radius: 50%;
  width: ${props => props.size ? props.size : '20px'};
  height: ${props => props.size ? props.size : '20px'};
  background: ${props => props.color ? props.color : 'white'};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  svg {
    width: 100%;
    height: 100%;
    fill: white;
  }
`
export default class TitleLabel extends Component {
  render () {
    return (
      <LabelWrapper
        onClick={this.props.onLabelClick}
        size={this.props.size}
        color={this.props.color}>
        {this.props.children}
      </LabelWrapper>

    )
  }
}
