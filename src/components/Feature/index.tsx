import React from 'react';
import FeatureStyled from './styled';

export default ({icon, description}: {icon: string, description: string}) => (
    <FeatureStyled>
        <img src={icon} alt="icon student" />
        <p className="uppercase">{description}</p>
    </FeatureStyled>
);