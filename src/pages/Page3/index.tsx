import React from 'react'
import CardComments from '../../components/CardComments';
import Page3Styled from './styles';

export default () => (
    <Page3Styled>
        <h2 className="montserrat">FOI COM ESSA VISÃO E LENDO <br/> DIARIAMENTE COMENTÁRIOS COMO...</h2>

        <div className="container-card-comments">
            <CardComments
                p1="“O salário não fecha mais as conta no fim do mês”"
                p2="“Me ajuda, por favor!”"
            />

            <CardComments
                p1="“O salário não fecha mais as conta no fim do mês”"
                p2="“Me ajuda, por favor!”"
            />

            <CardComments
                p1="“O salário não fecha mais as conta no fim do mês”"
                p2="“Me ajuda, por favor!”"
            />
        </div>

        <p className="montserrat">...Que <span>criei uma gama de estratégias</span> que podem trazer <span>3K ou mais todo mês</span> para o seu bolso.</p>
    </Page3Styled>
)