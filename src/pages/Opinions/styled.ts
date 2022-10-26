import styled from 'styled-components';

export default styled.section`
    position: relative;
    top: -120px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        width: 730px;
        text-align: center;
        font-size: 38px;
        font-weight: 700;
    }

    .container-opnions {
        display: flex;
        margin-top: 50px;

        div {
            display: flex;
        }

        .next-arrow-right {
            transform: rotate(180deg);
        }
    }
`;