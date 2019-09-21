import React from 'react';

export default function Header({ /*idk, lol*/ }) {
    return (
        <div className="header flex row">
            <div className="headerLogo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 114" className="headerSVG"><path d="M0 0v114h38V88h53V26L65 0zM156 0l-56 88 26 26h60l26-26zM244 0l-26 26 31 31-31 31 26 26 31-31 31 31 26-26-31-31 31-31-26-26-31 31z" fill="#fff"/></svg>
            </div>
            <div className="headerTxt">Tabletop Freeplay</div>
        </div>
    );
}