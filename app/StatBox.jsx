import React from 'react';

function Stat({name, value}) {
    return (
        <div className="stat">
            <span className="value">{value}</span>
            <span className="name">{name}</span>
        </div>
    );
}

const validStats = {
    "titles": "Unique Titles",
    "checked_out": "Checked Out",
    "hours_played": "Hours Played",
    "active_checkouts": "Open Checkouts",
    "titles_played": "Titles Played",
    "total_checkouts": "Total Checkouts"
}

export default class StatBox extends React.Component {
    render() {
        const stats = Object.keys(this.props.stats).filter((k) => k in validStats).map((k, index) => <Stat key={index} name={validStats[k]} value={this.props.stats[k]} />)
        return (
            <div className="leftBox">
                <div className="sectionHeader"><div>Library Status</div></div>
                <div className="stat-box">{stats}</div>
            </div>
        );
    }
}