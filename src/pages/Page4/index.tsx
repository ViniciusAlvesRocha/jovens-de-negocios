import React from 'react';
import Page4Styled from './styled';
import  ContainerCardPerson from '../../components/ContainerCardPerson';

export default () => (
    <Page4Styled>
        <h2 className="white">APRENDA MANEIRAS CONCRETAS DE GARANTIR SUA RENDA EXTRA.</h2>
        <h3 className="white">Se liga nessa palinha dos 8 caminhos que você vai ter acesso!</h3>

        <ContainerCardPerson />

       <div className="cta-quero-desvendar-os-8-caminhos">
            <p>E isso é só o começo jovem, vou te entregar ouro em mãos. Refine e coloque em prática que o dinheiro encontrará você!</p>

            <button className="button-styled uppercase">Quero desvendar os 8 caminhos</button>
       </div>

    </Page4Styled>
);