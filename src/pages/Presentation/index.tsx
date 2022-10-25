import React from 'react';
import PresentationStyled from './styles';

import brenoChair from '../../assets/breno-chair.png';
import logo from '../../assets/logo.png';

const Presentation = () => {
    return (
    <PresentationStyled>
        <div className="logo-text-button">
            <img className="logo" src={logo} alt="logo Jovens" />
            <p className="uppercase main-text-page-1">Descubra os 8<br/>caminhos para</p>
            <p className="uppercase main-text-page-1">Aumentar sua renda<br/>em 3K+ todo mês</p>
            <p className="" >Coloque em prática ainda hoje.</p>
            <button className="uppercase button-styled">Quero aumentar a minha renda</button>
        </div>
        <img className="main-image-breno" src={brenoChair} alt="Breno sentado na cadeira" />
    </PresentationStyled>
    )
    };

export default Presentation;