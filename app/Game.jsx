import React from 'react';

import images from './images/games/*.jpg';
import noImage from './images/games/NoImage.jpg';

export default function Game({title, checkouts, available}) {
    console.log('Images:');
    console.log(images);
    return (
        <div className="game">
            <div className="image"><img src={title in images ? images[title] : noImage} /></div>
            <div className="title">{title}</div>
            <div className="info">
                <span className="checkouts">{checkouts}</span>
                <span className={`availability ${available ? "available" : "notAvailable"}`}></span>
            </div>
        </div>
    );
}