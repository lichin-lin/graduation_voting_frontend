import 'babel-polyfill'
import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { breakpoint } from 'js/style/utils.js'
import _ from 'lodash'

const albumData = [
  {
    title: 'BangRangGa',
    group: 'Minjae Jung'
  },
  {
    title: 'LOS HERALDOS NEGROS',
    group: 'Mayte Alvarado'
  },
  {
    title: 'Forest',
    group: 'Arun Mehmi'
  },
  {
    title: 'Forest',
    group: 'Arun Mehmi'
  }
]

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
              onClick={() => this.moveToAlbum(id)}>
              <p>0{id + 1}</p>
              <h4>{el.title}</h4>
              <h4>- {el.group}</h4>
            </div>
          )
        }
      </Preview>
    )
  }
}
