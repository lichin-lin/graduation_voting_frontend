import { injectGlobal } from 'styled-components'

injectGlobal`
  input[type=range] {
      margin: auto;
      outline: none;
      padding: 0;
      height: 6px;
      background-color: white;
      background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #473e4f), color-stop(100%, #feebc5));
      background-image: -webkit-linear-gradient(#473e4f, #feebc5);
      background-image: -moz-linear-gradient(#473e4f, #feebc5);
      background-image: -o-linear-gradient(#473e4f, #feebc5);
      background-image: linear-gradient(#feebc5, #feebc5);
      background-repeat: no-repeat;
      border-radius: 10px;
      cursor: pointer;
      -webkit-appearance: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
      box-shadow: none;
      border: none;
      background: transparent;
      -webkit-appearance: none;
  }

  input[type=range]::-moz-range-track {
      box-shadow: none;
      border: none;
      background: transparent;
  }

  input[type=range]::-moz-focus-outer {
      border: 0;
  }

  input[type=range]::-webkit-slider-thumb {
      width: 14px;
      height: 14px;
      border: 0;
      background: #D7BD44;
      border-radius: 100%;
      box-shadow: 0 0 1px 0px rgba(0,0,0,0.1);
      -webkit-appearance: none;
  }

  input[type=range]::-moz-range-thumb {
      width: 14px;
      height: 14px;
      border: 0;
      background: #D7BD44;
      border-radius: 100%;
      box-shadow: 0 0 1px 0px rgba(0,0,0,0.1);
  }
`
