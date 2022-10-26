import styled from 'styled-components';

const FAQSatyled = styled.div`
    padding-bottom: 60px;

    h2 {
        font-size: 73px;
    }

    h3 {
        margin-top: 15px;
        font-size: 25px;
    }

    & > ul {
        list-style: none;
    }

    .button-faq {
        background: #161616;
        color: #fff;
        width: 730px;
        height: 72px;
        font-size: 25px;
        border: none;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px;
        margin: 20px 0;
    }

    & > button {
        font-size: 23px;
        width: 730px;
        margin-bottom: 30px;
    }
`;

export default FAQSatyled;
