import React from 'react';
import FooterSatyled from './styled';

const Footer = () => (
    <FooterSatyled className="footer background-site white center">
        <p>Copyright 2022 © Jovens de negócios
CNPJ - 33.229.343/0001-81</p>

        <div>
            <a href="">Termos de uso</a>
            <span>|</span>
            <a href="">Políticas de privacidade</a>
        </div>
    </FooterSatyled>
);

export default Footer;