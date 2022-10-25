import React from 'react';
import CardPersonStyled from './styled';

export default ({img, alt}: {img: any, alt: any}) => (
    <CardPersonStyled src={img} alt={alt}/>
);