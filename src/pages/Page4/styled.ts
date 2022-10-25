import styled from 'styled-components';
import backgroundPage4 from '../../assets/background-page-4.png';

export default styled.section`
    position: relative;
    bottom: 140px;
    height: 207vh;
    background: url('${backgroundPage4}'), #000;
    background-repeat: no-repeat;
    background-position: 0px -200px;

    h2 {
        padding-top: 50px;
        font-size: 38px;
        font-weight: 700;
        text-align: center;
        width: 800px;
        margin: 0 auto;
    }

    h3 {
        margin: 0 auto;
        margin-top: 20px;
        text-align: center;
    }

    .cta-quero-desvendar-os-8-caminhos {
        margin-top: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
       /* background: red; */
        p {
            text-align: center;
            width: 800px;
            color: #fff;
            font-size: 25px;
        }

        button {
            margin: 40px auto 0;
        }
    }
`;