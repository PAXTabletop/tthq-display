import React from 'react';

export default function CenterBox() {
    return (
        <div className="centerBoxContainer">
            <div className="thirdBoxOne">
            </div>
            <div className="thirdBoxTwo">
            </div>
            <div className="secondBoxOne">
            </div>
            <div className="secondBoxTwo">
            </div>
            <div className="firstBox">
            </div>
            <div className="centerContent">
                <div className="centerLogo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 114" className="headerSVG"><path d="M0 0v114h38V88h53V26L65 0zM156 0l-56 88 26 26h60l26-26zM244 0l-26 26 31 31-31 31 26 26 31-31 31 31 26-26-31-31 31-31-26-26-31 31z" fill="#fff"/></svg>
                </div>
                <div className="centerText">
                    Welcome to Tabletop!
                </div>
                <div className="centerSubtext">
                    Find a game, check it out, and play!
                </div>
            </div>
        </div>
    );
}