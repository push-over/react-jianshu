import {
  createGlobalStyle
} from 'styled-components';

export const IconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1546236698229'); /* IE9*/
    src: url('./iconfont.eot?t=1546236698229#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1546236698229') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1546236698229#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;