import 'babel-polyfill'
// import Containers from 'containers'
import React, { Component } from 'react'
import colors from 'js/style/colors.js'
import styled from 'styled-components'
import { fontSize, fontFamily } from 'js/style/font.js'
import { squareBase, breakpoint } from 'js/style/utils.js'
import { NavLink, withRouter } from 'react-router-dom'
import TiArrowUp from 'react-icons/lib/ti/arrow-up'
import _ from 'lodash'
let logo = require('assets/image/logo.png')

const tabList = ['news', 'events', 'people', 'research', 'education', 'about', 'contact']

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  background: ${colors.headerGray};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px 100px 5px;
  @media screen and (max-width: ${breakpoint.tablet}) {
    padding: 30px 10px 5px;
  }
`
const Content = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`
const Section = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.white};
  flex: ${props => props.flexParams ? props.flexParams : 'inherit'};
  a,
  p,
  span {
    font-size: ${fontSize.p2};
  }
  span {
    margin: 0 ${squareBase * 4}px;
  }
  a {
    cursor: pointer;
  }
  @media screen and (max-width: ${breakpoint.tablet}) {
    flex: inherit;
  }
`
const Logo = styled.div`
  height: 60px;
  width: 150px;
  overflow: visible;
  position: relative;
  cursor: pointer;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    height: 80px;
    width: auto;
  }
  z-index: 9999;
`

const Navbar = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  flex: 1;
  justify-content: space-between;

  > li {
    a {
      cursor: pointer;
      color: ${colors.white};
      font-size: ${fontSize.h2};
      line-height: ${fontSize.h2};
      font-family: ${fontFamily.defaultFontMedium};
      margin: 0 0 0 ${squareBase * 10}px;
      text-decoration: none;
      letter-spacing: 1px;
      position: relative;

      &.active {
        color: ${colors.ci};
        &:after {
          position: absolute;
          content: '';
          width: 100%;
          height: 2px;
          bottom: 1px;
          left: 0px;
          background: ${colors.ci};
        }
      }
      @media screen and (max-width: 1024px) {
        font-size: ${fontSize.h3};
        margin: 0 0 0 ${squareBase * 0}px;
      }
      @media screen and (max-width: 960px) {
        font-size: ${fontSize.h4};
        margin: 0 0 0 ${squareBase * 0}px;
      }
    }
    @media screen and (max-width: ${breakpoint.tablet}) {
      display: none;
    }
  }
`

const MobileNav = styled.div`
  display: none;
  @media screen and (max-width: ${breakpoint.tablet}) {
    display: block;
    width: auto;
    height: 50px;
    svg {
      width: 50px;
      height: 50px;
      transition: all 0.35s ease;
      transform: rotate(225deg);
    }
  }
  &.active {
    svg {
      transition: all 0.35s ease;
      transform: rotate(45deg);
    }
  }
`
const Clickable = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  > p {
    width: auto;
    margin: 0;
    margin-top: 7.5px;
    font-size: ${fontSize.h2};
    line-height: ${fontSize.h2};
    font-family: ${fontFamily.defaultFontMedium};
  }
`
const MobileMenu = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  position: absolute;
  left: -10px;
  content: '';
  background: black;
  z-index: 1;
  opacity: 0;
  transition: all 0.75s ease;
  transform-origin: 100% 0%;
  transform: scale(0, 0);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  li {
    margin: 10px 0;
    a {
      cursor: pointer;
      color: ${colors.white};
      font-size: ${fontSize.h2};
      line-height: ${fontSize.h2};
      font-family: ${fontFamily.defaultFontMedium};
      letter-spacing: 1px;
      text-decoration: none;
      position: relative;
      &.active {
        color: ${colors.ci};
        &:after {
          position: absolute;
          content: '';
          width: 100%;
          height: 2px;
          bottom: 1px;
          left: 0px;
          background: ${colors.ci};
        }
      }
    }
  }
  &.active {
    opacity: 1;
    transition: all 0.75s ease;
    transform: scale(1, 1);
  }
`
@withRouter
export default class Header extends Component {
  state = {
    arrowDirect: false,
    activeTab: ''
  }

  render () {
    let match = process.env.NODE_ENV !== 'production' ? '/2017NCTU-HCI' : ''
    return (
      <HeaderWrapper>
        <Content>
          <Section>
            <Logo onClick={() => {
              this.props.history.push('/2017NCTU-HCI')
              this.setState({
                activeTab: ''
              })
            }}>
              <img src={logo} />
            </Logo>
          </Section>
          <Section flexParams={1}>
            <Navbar>
              {
                _.map(tabList, (tab, id) =>
                  <li key={id}>
                    <NavLink to={`${match}/${tab}`} activeClassName="active">
                      {tab.toUpperCase()}
                    </NavLink>
                  </li>
                )
              }
              {/* <li><NavLink to={`${match}/news`}>News</NavLink></li> */}
              <MobileNav
                className={this.state.arrowDirect ? 'active' : null}
                onClick={() => { this.setState({arrowDirect: !this.state.arrowDirect}) }}>
                <Clickable>
                  <p>{this.state.activeTab.toUpperCase()}</p>
                  <TiArrowUp />
                </Clickable>
                <MobileMenu className={this.state.arrowDirect ? 'active' : null}>
                  {
                    _.map(tabList, (tab, id) =>
                      <li key={id}>
                        <NavLink
                          to={`${match}/${tab}`}
                          onClick={() => { this.setState({activeTab: tab}) }}
                          activeClassName="active">
                          {tab.toUpperCase()}
                        </NavLink>
                      </li>
                    )
                  }
                </MobileMenu>
              </MobileNav>
            </Navbar>
          </Section>
        </Content>
      </HeaderWrapper>
    )
  }
}
