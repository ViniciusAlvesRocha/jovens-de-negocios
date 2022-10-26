import styled from 'styled-components';

export default styled.div`
    background-color: #F18805;
    width: 808px;
    height: 283px;
    border-radius: 90px;
    margin-bottom: 30px;

    div {
        position: relative;
        top: 5.5px;
        width: 808px;
        height: 273px;
        background: url('${props => props.theme.background}');
        ${props => props.theme.insetShadow ? 'box-shadow: inset 808px -283px 200px rgba(0, 0, 0, .85);' : ''}
        border-radius: 72px;
        padding: ${props => props.theme.icon ? '20px' : '60px'} 45px;
        box-sizing: border-box;
        background-position: ${props => props.theme.backgroundPosition};

    }

    .title {
        color: #F18805;
        font-weight: 700;
        font-size: 48px;
    }

    .description {
        color: #fff;
        font-size: 25px;
    }
`;