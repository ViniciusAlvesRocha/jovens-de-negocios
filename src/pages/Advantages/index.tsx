import React from 'react';
import AdvantagesStyled from './styled';
import Advantage from '../../components/Advantage';
import AdvantagesModel from '../../models/advantages';
import CardEnrollNow from '../../components/CardEnrollNow';

const Advantages = () => (
    <AdvantagesStyled>
        <div className="center">
            <h2>As vantagens de adquirir o Aumente a Sua Renda:</h2>
            <div className="advantages-container">
                { AdvantagesModel.map(({icon, description}) => (
                    <Advantage
                        icon={icon}
                        description={description}
                    />
                )) }
            </div>
        </div>
        <CardEnrollNow />
    </AdvantagesStyled>
);

export default Advantages;
