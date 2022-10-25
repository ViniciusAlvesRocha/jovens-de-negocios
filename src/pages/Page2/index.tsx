import React from 'react';
import Page2Styled from './styles';
import brenoFrame from '../../assets/breno-frame.png';
import backgroundSmoke from '../../assets/background-smoke.jpeg';

export default () => (
<Page2Styled>
    <div>
        <div className="border-gradient border-gradient-yellow breno-frame">
            <img className="breno-frame" src={brenoFrame} alt="Breno" />
        </div>
        <img className="background-smoke" src={backgroundSmoke} alt="smoke" />
    </div>

    <div className="text montserrat">
        <h2>
        Eai! Meu nome é Breno Perrucho
        </h2>

        <p>Hoje, com 25 anos, além de fundar o canal Jovens de Negócios no youtube que já conta com mais de 1.9 Milhões de inscritos.
        </p>

        <p>
        Sou autor do livro “O que o Ensino não te Ensina” e CEO da empresa Jovens de Negócios, que busca levar a Educação Financeira a todos.
        </p>

        <p>
        Meu propósito aqui é construir pessoas livres das amarras sociais por um mundo cada vez mais próspero economicamente.
        </p>
    </div>
</Page2Styled>
)