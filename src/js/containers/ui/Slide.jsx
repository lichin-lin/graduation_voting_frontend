import 'babel-polyfill'
// import Containers from 'containers'
import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import colors from 'js/style/colors.js'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { breakpoint } from 'js/style/utils.js'

const StyledSlider = styled(Slider)`
  width: 100vw;
  height: calc(100vw * 8 / 24);
  display: flex;
  @media screen and (max-width: ${breakpoint.tablet}) {
    height: calc(100vw * 12 / 24);
  }
  .slick-list {
    height: calc(100vw * 8 / 24);
    @media screen and (max-width: ${breakpoint.tablet}) {
      height: calc(100vw * 12 / 24);
    }
    .slick-track {
      height: calc(100vw * 8 / 24);
      @media screen and (max-width: ${breakpoint.tablet}) {
        height: calc(100vw * 12 / 24);
      }
    }
  }
  .slick-dots {
    bottom: 20px;
    left: 20px;
    /* transform: translateX(-50%); */
    text-align: left;
    width: fit-content;
    li {
      &.slick-active {
        div {
          background-color: rgba(0, 0, 0, 0.7);
        }
      }
    }
    @media screen and (max-width: ${breakpoint.tablet}) {
      left: 20px;
      width: fit-content;
    }
  }
`
const SliderCell = styled.div`
  width: 100%;
  cursor: pointer;
  height: calc(100vw * 8 / 24);
  @media screen and (max-width: ${breakpoint.tablet}) {
    height: calc(100vw * 12 / 24);
  }
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.bgSrc ? props.bgSrc : ''});
`

const PaginationCube = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid ${colors.black};
  background-color: rgba(255, 255, 255, 0.3);
`
@withRouter
export default class Slide extends Component {
  render () {
    let match = process.env.NODE_ENV !== 'production' ? '/2017NCTU-HCI' : ''
    let settings = {
      customPaging: (i) => {
        return <PaginationCube />
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      draggable: false
    }
    return (
      <StyledSlider {...settings}>
        <SliderCell bgSrc={require('assets/image/banner.jpg')}
          onClick={() => { this.props.history.push(`${match}/events/1`) }}
        />
        {/* <SliderCell bgSrc={require('assets/image/openHCI.png')} /> */}
        {/* <SliderCell bgSrc={require('assets/image/TAICHI.png')} /> */}
      </StyledSlider>
    )
  }
}
