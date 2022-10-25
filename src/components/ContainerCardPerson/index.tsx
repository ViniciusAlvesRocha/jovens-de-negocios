import React from 'react';
import CardPerson from '../CardPerson';
import ContainerPersonStyled from './styled';
import direcaoFotografia from '../../assets/direcao-de-fotografia.png';
import consultoriaFinanceira from '../../assets/consultoria-financeira.png';
import desenvolvimentoWeb from '../../assets/desenvolvimento-web.png';

export default () => (
    <ContainerPersonStyled>
        <CardPerson img={direcaoFotografia} alt="Direção de Fotografia"/>
        <CardPerson img={consultoriaFinanceira} alt="Consultoria Financeira"/>
        <CardPerson img={desenvolvimentoWeb} alt="Desenvolvimento Web"/>
    </ContainerPersonStyled>
);