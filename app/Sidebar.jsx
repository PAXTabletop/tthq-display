import React from 'react';
import SidebarContent from './SidebarContent';
import images from './images/recs/*.jpg';

const enforcerRecs = [
    {
        "title": "Azul",
        "image": images["Azul"],
        "text": "Blah blah blah Azul",
        "players": "2-4",
        "time": "60"

    },
    {
        "title": "Something",
        "image": images["Azul"],
        "text": "Blah blah blah Something",
        "players": "2-4",
        "time": "60"
    },
    {
        "title": "Test",
        "image": images["Azul"],
        "text": "Blah blah blah Test",
        "players": "2-4",
        "time": "60"
    },
]

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default function Sidebar() {
    shuffle(enforcerRecs);
    return (
        <div className="sidebar">
            <div className="sidebarBanner"><h3>Enforcer Recs</h3></div>
            <div className="sidebarContent">
                <SidebarContent rec={enforcerRecs[0]} />
                <SidebarContent rec={enforcerRecs[1]} />
            </div>
        </div>
    );
}