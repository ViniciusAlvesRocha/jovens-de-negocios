import styled from 'styled-components';
import backPage1 from './../../assets/background-page-1.png';

export default styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 1000px;
    background-image: url(${backPage1});
    background-repeat: no-repeat;
    background-color: #000;
    background-size: 100%;

    .logo-text-button {
        margin-top: 110px;
    }

    .logo-text-button p:nth-child(2){
        color: #fff;
        font-family: 'Montserrat';
        margin-bottom: 0px;
    }

    .logo-text-button p:nth-child(3){
        color: #F18805;
        font-family: 'Montserrat';
        margin-top: 0px;
    }

    .logo-text-button p:nth-child(4){
        color: #ffff;
        font-family: 'Montserrat';
        font-weight: 700;
    }

    .logo-text-button button{
        width: 400px;
        height: 50px;
        color: #fff;
        background: linear-gradient(89.5deg, #F18805 52.41%, #F0A202 104.73%);
        box-shadow: 0px 0px 36px 2px rgba(240, 162, 2, 0.69);
        border-radius: 9px;
        border: none;
    }

    .main-text-page-1 {
        font-size: 30px;
        font-weight: 1000;
        line-height: 30px;
    }

    .main-image-breno {
        margin-top: 110px
    }
`;