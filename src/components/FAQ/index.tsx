import React from 'react';
import FAQSatyled from './styled';
import yellowArrow from '../../assets/yellow-arrow.svg';
import creditCardsAccept from '../../assets/credit-cards-accept.svg';

const FAQ = () => (
    <FAQSatyled className="background-site white center">
        <h2 className="montserrat strong">F.A.Q</h2>
        <h3 className="montserrat">Você ficou com alguma dúvida, jovem?</h3>

        <ul>
            <li>
                <button className='button-faq'>Para quem não é o Aumente sua Renda?<img src={yellowArrow} /></button>
            </li>

            <li>
                <button className='button-faq'>Quais são as Formas de Pagamento?<img src={yellowArrow} /></button>
            </li>

            <li>
                <button className='button-faq'>Tem alguma garantia?<img src={yellowArrow} /></button>
            </li>

            <li>
                <button className='button-faq'>Como recebo os dados?<img src={yellowArrow} /></button>
            </li>
        </ul>

        <button className="button-styled">Liberar meu acesso agora!</button>

        <img src={creditCardsAccept} alt="Cartões de crédito aceitos" />
    </FAQSatyled>
);

export default FAQ;