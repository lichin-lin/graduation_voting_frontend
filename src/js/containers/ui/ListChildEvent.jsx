import 'babel-polyfill'
// import Containers from 'containers'
import React, { Component } from 'react'
import colors from 'js/style/colors.js'
import styled from 'styled-components'
import { fontSize } from 'js/style/font.js'
import { squareBase, breakpoint } from 'js/style/utils.js'

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${colors.black};
  padding: ${squareBase}px 0;
  cursor: pointer;
`

const Section = styled.div`
  display: flex;
  align-items: flex-end;
  margin: ${squareBase * 2}px 0;
  justify-content: ${props => props.type === 'title' ? 'space-between' : 'flex-start'};
  h4 {
    font-weight: bold;
    font-size: ${fontSize.h5};
    margin: 0;
  }
  p {
    min-width: 50px;
    margin: 0;
    font-weight: bold;
    font-size: ${fontSize.h5};
    line-height: calc(${fontSize.h5} * 1.5);
  }
`
const ImageCell = styled.div`
  width: 100%;
  min-height: 200px;
  height: 20vw; /* 250.5px; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.bgSrc ? props.bgSrc : ''});

  @media screen and (max-width: ${breakpoint.tablet}) {
  }
`
export default class ListChildEvent extends Component {
  // componentWillReceiveProps (nextProps) {
  //   this.refs.truncatedActivityTitle.update()
  // }
  render () {
    return (
      <NewsWrapper
        onClick={this.props.onClick}>
        <Section>
          <ImageCell bgSrc={this.props.eventsImg} />
        </Section>
        <Section type={'title'}>
          <h4>{this.props.eventsTitle}</h4>
          <p>{this.props.eventsDate}</p>
        </Section>
      </NewsWrapper>
    )
  }
}
