import React from 'react';
import OpinionsStyled from './styled';
import CardOpinion from '../../components/CardOpnion';
import nextArrow from '../../assets/arrow.svg';

const opinions = [
    {
        name: 'Luiz Guilherme de Melo',
        opinion: '“Aulas muito bem elaboradas e com essas dicas irei fazer meu primeiro site e Aumentar a minha renda !! Só tenho agradecer a essa equipe maravilhosa da Jovens”',
    },
    {
        name: 'Luiz Guilherme de Melo',
        opinion: '“Aulas muito bem elaboradas e com essas dicas irei fazer meu primeiro site e Aumentar a minha renda !! Só tenho agradecer a essa equipe maravilhosa da Jovens”',
    },
];

export default () => (
    <OpinionsStyled>
        <h2>VEJA A OPINIÃO DE QUEM JÁ ADQUIRIU O AUMENTE SUA RENDA</h2>
        <div className="container-opnions">
            <img className="next-arrow-left" src={nextArrow} alt="arrow left" />
            <div>
                {opinions.map(({name, opinion}) => <CardOpinion name={name} opinion={opinion} />)}
            </div>
            <img className="next-arrow-right" src={nextArrow} alt="arrow right" />
        </div>
    </OpinionsStyled>
);