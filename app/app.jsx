import React from 'react';
import ReactDOM from 'react-dom';
import GameList from './GameList';

const fakeGames = [
    { title: 'Azul', checkouts: 29, available: true},
    { title: 'Patchwork', checkouts: 10, available: false},
    { title: 'Monopoly', checkouts: 9, available: true},
    { title: 'Sorry', checkouts: 5, available: true},
    { title: 'Trouble', checkouts: 3, available: false}
]


class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <h1>PAX Tabletop</h1>
                <GameList games={fakeGames} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));