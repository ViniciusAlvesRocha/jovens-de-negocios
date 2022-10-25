import React from 'react';
import OpinionsStyled from './styled';
import CardOpinion from '../../components/CardOpnion';

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
        <div>
            {opinions.map(({name, opinion}) => <CardOpinion name={name} opinion={opinion} />)}
        </div>
    </OpinionsStyled>
);