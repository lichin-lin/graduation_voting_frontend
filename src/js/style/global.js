import { injectGlobal } from 'styled-components'
import { fontSize } from 'js/style/font.js'
import FuturaRegular from 'assets/font/FuturaCondensedRegular.ttf'
import FuturaMedium from 'assets/font/FuturaCondensedMedium.otf'

injectGlobal`
  html,
  body {
    /* overflow: hidden; */
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-size: 14px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  @font-face {
    font-family: FuturaRegular;
    src: url('${FuturaRegular}') format('opentype');
  }

  @font-face {
    font-family: FuturaMedium;
    src: url('${FuturaMedium}') format('opentype');
  }

  #app {
    width: 100%;
    height: 100%;
  }
  .ant-layout {
    width: 100%;
  }

  #counter {
    border: 1px solid #ccc;
    border-width: 0px 1px 1px 1px;
    color: #eee;
    padding: 5px 15px;
    text-align: right;
  }

  * {
    box-sizing: border-box;
    min-height: 0;
    min-width: 0;
  }

  h3 {
    font-size: ${fontSize.h1};
  }

  p, span {
    font-size: ${fontSize.p1};
  }
`
