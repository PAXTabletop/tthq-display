import React from 'react';
import Game from './Game';

export default class GameList extends React.Component {
    render() {
        const games = this.props.games;
        const topFive = this.props.topFive;
        const gameslist = games.map(g => <li key={g.title}><Game title={g.title} available={g.available} checkouts={g.checkouts} /></li>)
                               .slice(topFive ? 0 : 5, topFive ? 5 : 10);

        return (
            <div className="leftBox">
                <div className="sectionHeader">
                    <div>Top Titles</div>
                    <div>{topFive ? 1 : 2}/2</div>
                </div>
                <div className="subHeader">
                    <div className="firstSubHeader">Box</div>
                    <div className="secondSubHeader">Title</div>
                    <div className="rightSubHeader">Checkouts</div>
                </div>
                <ul className="game-list">{gameslist}</ul>
            </div>
        );
    }
}