import React from 'react';
import Game from './Game';
import './GameList.sass';

export default class GameList extends React.Component {
    render() {
        const games = this.props.games;
        const gameslist = games.map(g => <li><Game title={g.title} available={g.available} checkouts={g.checkouts} /></li>);

        return <ul className="game-list">{gameslist}</ul> ;
    }
}