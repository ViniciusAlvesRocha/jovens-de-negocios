import React from 'react';
import AdvantageStyled from './styled';

type Advantage = {
    icon: string,
    description: string,
};

const Advantage = ({icon, description}: Advantage) => (
    <AdvantageStyled>
        <img src={icon} />
        <p>{description}</p>
    </AdvantageStyled>
);

export default Advantage;