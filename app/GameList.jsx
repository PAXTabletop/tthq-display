import React from 'react';
import Game from './Game';

export default class GameList extends React.Component {
    render() {
        const games = this.props.games;
        const gameslist = games.map(g => <li><Game title={g.title} available={g.available} checkouts={g.checkouts} /></li>);

        return (
            <div>
                <div className="sectionHeader">
                    <div>Top Titles</div>
                    <div>1/2</div>
                </div>
                <div className="subHeader">
                    <div className="firstSubHeader">Box</div><div className="secondSubHeader">Title</div>
                    <div className="dividerSubHeader"></div><div className="rightSubHeader">Checkouts</div>
                </div>
                <ul className="game-list">{gameslist}</ul>
            </div>
        );
    }
}