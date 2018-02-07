import 'babel-polyfill'
import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { breakpoint } from 'js/style/utils.js'
import { albumData } from 'js/utils/data'

import ReactGA from 'react-ga'
ReactGA.initialize('UA-74093364-15')

import _ from 'lodash'

const Preview = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  div {
    opacity: 0.35;
    margin: 0 30px;
    h4, p {
      font-size: 12px;
      margin: 0;
      color: white;
      font-weight: normal;
    }
    p {
      margin-bottom: 10px;
    }
    &.active {
      transition: all 0.3s ease;
      opacity: 1;
    }
  }
  @media screen and (max-width: ${breakpoint.tablet}) {
    display: none;
  }
`

@withRouter
export default class AlbumPreviewList extends Component {
  moveToAlbum = (id) => {
    this.props.setAlbumIndex(id)
    this.props.togglePlaying(true)
    if (this.props.swiper) this.props.swiper.slideTo(id)
  }

  render () {
    return (
      <Preview>
        {
          _.map(albumData, (el, id) =>
            <div
              key={id}
              className={this.props.albumIndex === id ? 'active' : null}
              onClick={() => {
                this.moveToAlbum(id)
                ReactGA.event({
                  category: 'User Action',
                  action: `move to album ${id + 1}`
                })
              }}>
              <p>0{id + 1}</p>
              <h4>{el.title}</h4>
            </div>
          )
        }
      </Preview>
    )
  }
}
