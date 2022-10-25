import React from 'react';
import CardOpnionStyled from './styled';
import stars from '../../assets/stars.svg';

type CardOpinion = {
    name: string,
    opinion: string,
};

export default ({name, opinion}: CardOpinion) => (
    <CardOpnionStyled>
        <h3>{name}</h3>
        <img src={stars} alt="estrelas de avaliação" />
        <p>{opinion}</p>
    </CardOpnionStyled>
);