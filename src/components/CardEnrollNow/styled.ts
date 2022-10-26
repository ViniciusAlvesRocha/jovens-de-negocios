import styled from 'styled-components';

const CardEnrollNowStyled = styled.div`
    border: 1px solid #f18805;
    border-radius: 46px;
    color: #fff;
    width: 471px;
    height: 650px;
    padding: 40px;


    h2 {
        font-size: 33px;
        margin-bottom: 20px;
        width: 380px;
    }

    ul {
        list-style: none;
        text-decoration: none;
    }

    ul > li {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        font-size: 21px;
    }

    ul > li > span {
        margin-right: 10px;
    }

    ul > li > span > img {
        width: 29px;
        height: 29px;
    }

    & > p {
        font-size: 21px;
        margin-bottom: 10px;
    }

    .price {
        font-size: 83px;
        font-weight: 900;
    }

    & > div >button {
        margin: 20px;
        font-size: 23px;
    }

    & > div > img {
        margin-top: 20px;
    }
`;

export default CardEnrollNowStyled;