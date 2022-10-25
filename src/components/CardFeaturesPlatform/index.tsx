import React from 'react';
import CardFeaturesPlatformStyled from './styled';
import Feature from '../../components/Feature';
import iconStudent from '../../assets/study.svg';
import iconLesson from '../../assets/video-lesson.svg';
import iconContent from '../../assets/video-content.svg';
import iconSuport from '../../assets/suport.svg';

export default () => (
    <CardFeaturesPlatformStyled>
        <h2 className="uppercase">O que o aumente sua renda vai entregar</h2>

        <div>
            <Feature icon={iconStudent} description="Curso com + de 11 aulas"/>
            <Feature icon={iconLesson} description="+ 290 minutos de conteúdo"/>
            <Feature icon={iconSuport} description="Suporte VIP dedicado"/>
            <Feature icon={iconContent} description="Atualizações com + aulas"/>
        </div>

        <p>Quero que você consiga faturar seus primeiros <span>3MIL</span> reais da maneira mais rápida possível, por isso a equipe deu o máximo para entregar o conteúdo com a melhor qualidade para você</p>
    </CardFeaturesPlatformStyled>
);