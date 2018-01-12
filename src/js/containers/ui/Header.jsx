import React, { Component } from 'react'
import colors from 'js/style/colors.js'
import styled from 'styled-components'
import { breakpoint } from 'js/style/utils.js'

let logoSrc = require('assets/image/logo.png')
let titleSrc = require('assets/image/title.png')

const StyledHeader = styled.div`
  width: 100%;
  height: auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items:flex-end;
  z-index: 1;
  @media screen and (max-width: ${breakpoint.tablet}) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`
const Navbar = styled.div`
  display: flex;
  > div {
    margin: 0 10px;
    font-weight: normal;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer
  }
  * {
    color: ${colors.ci_yellow};
    text-decoration: none;
    font-family: 'GENJ';
  }
  @media screen and (max-width: ${breakpoint.tablet}) {
    margin-top: 10px;
    > div {
      font-size: 16px;
    }
  }
`
const LogoWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-end;
  > img.logo {
    width: 100px;
    height: auto;
  }
  > img.title {
    margin-left: 10px;
    width: 200px;
    height: auto;
  }
  @media screen and (max-width: ${breakpoint.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img.logo {
      width: 50vw;
      height: auto;
    }
    > img.title {
      margin: 10px 0 0;
      width: 80vw;
    }
  }
`
export default class Header extends Component {
  render () {
    return (
      <StyledHeader>
        <LogoWrapper>
          <img className='logo' src={logoSrc} />
          <img className='title' src={titleSrc} />
        </LogoWrapper>
        <Navbar>
          {
            this.props.profile.hasOwnProperty('username')
            ? <div><a href=''>已登入, {this.props.profile.username}</a></div>
            : <div><a href='https://id.nctu.edu.tw/o/authorize/?client_id=dFo3aTrp02yAzzHgaYNf90IUGe15ASgZfb6Wl2gb&scope=profile&response_type=code'>登入</a></div>
          }
          <div><a href="/#about">關於網站</a></div>
        </Navbar>
      </StyledHeader>
    )
  }
}
