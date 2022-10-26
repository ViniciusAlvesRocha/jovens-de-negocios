import styled from 'styled-components';
import background from '../../assets/background-page-1.png';

export default styled.section`
    background: url('${background}'), rgba(0, 0, 0, 1);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    color: #fff;

    & > div {
        margin: 20px;
    }

    h2 {
        margin: 40px 0;
        width: 570px;
        font-size: 38px;
    }
`;