import React from 'react';
import CardEnrollNowStyled from './styled';
import verifyIcon from '../../assets/verify-icon.svg';
import creditCardsAccept from '../../assets/credit-cards-accept.svg';

const CardEnrollNow = () => (
    <CardEnrollNowStyled className="background-site">
        <h2 className="montserrat strong">FAÇA SUA INSCRIÇÃO AGORA!!!</h2>
        <ul>
            <li><span><img src={verifyIcon} alt="verify icon" /></span> Pagamento 100% seguro</li>
            <li><span><img src={verifyIcon} alt="verify icon" /></span>Acesso imediato</li>
            <li><span><img src={verifyIcon} alt="verify icon" /></span>7 dias de garantia</li>
        </ul>

        <p>Você vai levar tudo isso por apenas R$197,90 ou em até 12x de</p>

        <span className="price primary-color montserrat">R$ 19,90</span>

        <div className="center">

            <button className="button-styled">Fazer minha inscrição</button>

            <img src={creditCardsAccept} alt="credit card accept" />
        </div>
    </CardEnrollNowStyled>
);

export default CardEnrollNow;