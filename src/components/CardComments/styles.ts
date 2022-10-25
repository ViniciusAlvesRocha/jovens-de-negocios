import styled from 'styled-components';
import textureCardComments from '../../assets/texture-card-comment.png';

export default styled.div`
    color: #fff;
    font-size: 23px;
    font-weight: 700;
    margin: 20px;

    :root {
        --gradient-color: #F0A202;
    }
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        top: -226px;
        left: 0px;
        width: 350px;
        height: 206px;
        border-radius: 10px 10px 10px 10px;
        background: url('${textureCardComments}'), #000;

        p {
            text-align: center;
            width: 250px;
        }
    }

    .top {
    width: 351px;
    height: 207px;
    background: linear-gradient(to right, #222 50%, #F0A202);
    border-radius: 10px 10px 10px 10px;
    }

    .right {
    position: relative;
    top: -113px;
    left: 238px;
    width: 207px;
    height: 20px;
    background: linear-gradient(to right, #222 50%, #F0A202);
    border-radius: 10px 10px 10px 10px;
    }

    .rotate {
    transform: rotate(-90deg);
    }
`;