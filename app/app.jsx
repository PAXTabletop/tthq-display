import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import GameList from './GameList';
import StatBox from './StatBox';
import './styles/app.scss';
import Sidebar from './Sidebar';
import CenterBox from './CenterBox';

const fakeGames = [
    { title: 'Azul', checkouts: 29, available: true},
    { title: 'Patchwork', checkouts: 10, available: false},
    { title: 'Monopoly', checkouts: 9, available: true},
    { title: 'Sorry', checkouts: 5, available: true},
    { title: 'Trouble', checkouts: 3, available: false}
]

const fakeStats = {
    titles: 963,
    active_checkouts: 21,
    pct_checked_out: 89,
    titles_played: 384,
    total_checkouts: 204,
    hours_played: 9064
}

class App extends React.Component {
    render() {
        return (
            <div className="flex row">
                <div>
                    <Header />
                    <div className="flex row">
                        <div>
                            <GameList games={fakeGames} />
                            <StatBox stats={fakeStats} />
                        </div>
                        <CenterBox />
                    </div>
                </div>
                <Sidebar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));