import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import GameList from './GameList';
import StatBox from './StatBox';
import './styles/app.scss';
import Sidebar from './Sidebar';
import CenterBox from './CenterBox';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                current_event: "test",
                current_offset: -7,
                games: [
                    { title: 'Azul', checkouts: 29, available: true},
                    { title: 'Patchwork', checkouts: 10, available: false},
                    { title: 'Monopoly', checkouts: 9, available: true},
                    { title: 'Sorry', checkouts: 5, available: true},
                    { title: 'Trouble', checkouts: 3, available: false},
                    { title: 'Azul', checkouts: 29, available: true},
                    { title: 'Patchwork', checkouts: 10, available: false},
                    { title: 'Monopoly', checkouts: 9, available: true},
                    { title: 'Sorry', checkouts: 5, available: true},
                    { title: 'Trouble', checkouts: 3, available: false}
                ],
                random_game: {
                    available: true,
                    checkouts: 0,
                    title: "test game"
                },
                stats: {
                    titles: 963,
                    active_checkouts: 21,
                    checked_out: "89%",
                    titles_played: 384,
                    total_checkouts: 204,
                    hours_played: 9064
                }
            },
            url: null,
            topFive: false
        }
    }

    async loadData() {
        try {
            const res = await fetch(this.state.url, {mode: 'cors'});
            const blocks = await res.json();
            this.setState({data: blocks, topFive: !this.state.topFive});
            console.log(blocks)
        } catch (e) {
            console.log(e);
        }
        // Call every 5 minutes
        setTimeout(this.loadData.bind(this), 300000);
    }

    componentDidMount() {
        var url = prompt("Stats URL:", "http://localhost:3000/admin/stats");
        if (url == null || url == "") {
            return;
        }
        this.state.url = url;
        this.loadData();
    }

    render() {
        return (
            <div className="flex row">
                <div>
                    <Header />
                    <div className="flex row">
                        <div>
                            <GameList games={this.state.data.games} topFive={this.state.topFive} />
                            <StatBox stats={this.state.data.stats} />
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