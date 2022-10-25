import React from 'react';
import Page5Styled from './styled';
import  CardFeaturesPlatform from '../../components/CardFeaturesPlatform';
import Function from '../../components/Function';
import flameIcon from '../../assets/flame-icon.svg';
// BACKGROUNDS:
import backgroundHotSeat from '../../assets/background-hot-seat.png';
import backgroundSpecialSport from '../../assets/background-special-suport.png';
import backgroundBusinessNetwork from '../../assets/background-business-network.png';

export default () => {
    console.log('card function');
    console.log(backgroundHotSeat);
    return (
        <Page5Styled>
            <CardFeaturesPlatform />
            <p className="new-functions montserrat white">Adquirindo o Aumente sua Renda Hoje, garanta acesso EXCLUSIVO a nossa comunidade no App da Jovens e destrave novas funções como:</p>
    
            <div>
                <Function
                    background={backgroundHotSeat}
                    title="HotSeat"
                    description="Participe do HotSeat! Uma roda de conversa apenas para alinos da Jovens que busca tirar todas suas dúvidas sobre o mundo dos negócios e investimentos."
                    icon={flameIcon}
                    insetShadow={true}
                    backgroundPosition="-100px -160px"
                />

                <Function
                    background={backgroundSpecialSport}
                    title="Suporte Especial"
                    description="Sendo aluno você também ganha prioridade e um passe VIP, para tirar suas mais diversas dúvidas sobre o conteúdo com nosso suporte a qualquer hora."
                    insetShadow={true}
                    backgroundPosition="0px 0px"
                />

                <Function
                    background={backgroundBusinessNetwork}
                    title="Networking de Negócios"
                    description="Conhecer milhares de pessoas que pensam pra frente igual a você, pode te ajudar muito no futuro. A galera da Jovens é sempre ativa, é possível se comunicar através de chats e posts da plataforma, interanção não vai faltar!."
                    insetShadow={true}
                    backgroundPosition="0px 0px"
                />
            </div>
        </Page5Styled>
    )
};