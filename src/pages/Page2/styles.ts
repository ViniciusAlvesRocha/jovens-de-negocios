import styled from 'styled-components';
import backgroundSmoke from '../../assets/background-smoke.jpeg';

export default styled.section`
    display: flex;
    justify-content: center;
    z-index: 0;
    height: 100vh;
    width: 100%;
    background: #000;

    .border-gradient {
        z-index: 1;
        border: 10px solid;
        border-image-slice: 1;
        border-width: 5px;
        margin-left: 40px;
    }
    .border-gradient-yellow {
        border-image-source: linear-gradient(to bottom, #F18805, rgba(240, 162, 2, 0.69));
        box-shadow: 0px 0px 20px rgba(240, 162, 2, 0.69);
    }

    .breno-frame {
        position: relative;
        z-index: 3;
        padding-top: 40px;
        width: 508px;
        height: 545px;
    }

    .background-smoke {
        position: relative;
        top: -400px;
        left: 40px;
        z-index: 2;
    }

    .text {
        position: relative;
        z-index: 10;
        left: -60px;
        color: #fff;
        width: 600px;
    }

    .text > h2, p {
        font-size: 25px;
    }

    .text > h2{
        margin-bottom: 70px;
    }
`;