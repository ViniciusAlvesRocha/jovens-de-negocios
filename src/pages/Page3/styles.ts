import styled from 'styled-components';

export default styled.section`
    z-index: 10;
    position: relative;
    bottom: 100px;
    background-color: #000;

    h2 {
        color: #fff;
        font-size: 48px;
        font-weight: 700;
        text-align: center;
        margin: 0 auto;
        box-shadow: 10px -30px 20px #000;
    }

    .container-card-comments {
        margin-top: 60px;
        display: flex;
        justify-content: center;
    }

    & > p:nth-child(3) {
        position: relative;
        bottom: 180px;
        color: #fff;
        font-weight: 700;
        text-align: center;
        max-width: 500px;
        margin: 0 auto;
        
        span {
            color: #F18805;
        }
    }
`;