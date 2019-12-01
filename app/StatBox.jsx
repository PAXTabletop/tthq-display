import React from 'react';

function Stat({name, value}) {
    return (
        <div className="stat">
            <span className="value">{value}</span>
            <span className="name">{name}</span>
        </div>
    );
}

export default class StatBox extends React.Component {
    render() {
        const stats = Object.keys(this.props.stats).map((k, index) => <Stat key={index} name={k} value={this.props.stats[k]} />)
        return (
            <div className="leftBox">
                <div className="sectionHeader"><div>Library Status</div></div>
                <div className="stat-box">{stats}</div>
            </div>
        );
    }
}