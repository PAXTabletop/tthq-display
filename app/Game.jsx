import React from 'react';
import './Game.sass';

export default function Game({title, checkouts, available}) {
    return (
        <div className="game">
            <div className="image"><img src={`./images/${title}.png`} /></div>
            <div className="title">{title}</div>
            <div className="info">
                <span className="checkouts">{checkouts}</span>
                <span className="available">{available ? 'Y' : 'N'}</span>
            </div>
        </div>
    );
}