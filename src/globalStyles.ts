import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }

    .white {
        color: #fff;
    }

    .background-site {
        background-color: #000;
    }

    .button-styled {
        width: 400px;
        height: 50px;
        color: #fff;
        background: linear-gradient(89.5deg, #F18805 52.41%, #F0A202 104.73%);
        box-shadow: 0px 0px 36px 2px rgba(240, 162, 2, 0.69);
        border-radius: 9px;
        border: none;
        font-weight: 700;
    }
`;
 
export default GlobalStyle;