import { injectGlobal } from 'styled-components'
import { fontSize } from 'js/style/font.js'
import FuturaRegular from 'assets/font/FuturaCondensedRegular.ttf'
import FuturaMedium from 'assets/font/FuturaCondensedMedium.otf'
import GENJMedium from 'assets/font/genjyuugothic/GenJyuuGothic-Medium.ttf'
import GENJBold from 'assets/font/genjyuugothic/GenJyuuGothic-Bold.ttf'

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

  @font-face {
    font-family: FuturaMedium;
    src: url('${FuturaMedium}') format('opentype');
  }
  @font-face {
      font-family: GENJ;
      font-style: normal;
      font-weight: normal;
      src: url('${GENJMedium}') format('opentype');;
      src: url('${GENJMedium}') format('embedded-opentype'),
      url('${GENJMedium}') format('truetype'),
      url('${GENJMedium}') format('woff');
  }
  @font-face {
    font-family: GENJ;
    font-style: normal;
    font-weight: bold;
    src: url('${GENJBold}') format('opentype');;
    src: url('${GENJBold}') format('embedded-opentype'),
    url('${GENJBold}') format('truetype'),
    url('${GENJBold}') format('woff');
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

  canvas.sketch {
    position: fixed;
    top: 0;
    left: 0;
  }
  /* modal */
  /* .ReactModalPortal > * {
    opacity: 0;
  }

  .ReactModalPortal .ReactModal__Overlay {
    transition: opacity 200ms ease-in-out;
    background: rgba(0, 0, 0, 0.15);
    &--after-open {
      opacity: 1;
    }
    &--before-close {
      opacity: 0;
    }
  } */
`
