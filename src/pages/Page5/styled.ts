import styled from 'styled-components';
import backgroundPage4 from '../../assets/background-page-4.png';
import backgroundSparks from '../../assets/background-sparks.png';

export default styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('${backgroundSparks}'), #000;
    background-repeat: no-repeat;
    background-position: 200px 500px;
    position: relative;
    bottom: 150px;
    height: 230vh;

    & > div {
        height: 900px;
    }

    .new-functions {
        position: relative;
        bottom: 50px;
        font-size: 25px;
        width: 700px;
        text-align: center;
    }
`;