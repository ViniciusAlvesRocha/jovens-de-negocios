import React from 'react';
import CardCommentStyled from './styles';
import textureCardComment from '../../assets/texture-card-comment.png';

export default ({p1, p2}) => (
    <CardCommentStyled className="montserrat">
        <div class="top"></div>
        <div class="right rotate"></div>
        <div class="card">
            <p>{p1}</p>
            <p>{p2}</p>
        </div>
    </CardCommentStyled>
);