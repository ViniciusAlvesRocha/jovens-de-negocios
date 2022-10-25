import React from 'react';
import FunctionStyled from './styled';

type Function = {
    background: string;
    title: string,
    description: string,
    icon?: string | null,
    insetShadow?: boolean,
    backgroundPosition: string;
};

export default ({background, title, description, icon = null, insetShadow=false, backgroundPosition}: Function) => {
    return (
        <FunctionStyled theme={{background, insetShadow, backgroundPosition, icon}}>
            <div>
                {icon && <img src={icon} alt="flame icon" />}
                <p className="title">{title}</p>
                <p className="description">{description}</p>
                </div>
        </FunctionStyled>
    )
};