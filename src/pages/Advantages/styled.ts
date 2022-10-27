import styled from 'styled-components';
import background from '../../assets/background-page-1.png';

export default styled.section`
    background: url('${background}'), #000;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    color: #fff;
    width: 100%;

    & > div {
        box-sizing: border-box;
        margin: 20px;
    }

    h2 {
        margin: 40px 0;
        width: 570px;
        font-size: 38px;
    }
`;