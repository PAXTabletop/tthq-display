import React from 'react';

function Detail({name, value}) {
    return (
        <div className="detail">
            <span className="value">{value}</span>
            <span className="name">{name}</span>
        </div>
    );
}


export default class SidebarContent extends React.Component {
    render() {
        console.log(this.props.rec);
        return (
            <div className="enforcerRec">
                <div className="image">
                    <div className="title">
                        {this.props.rec.title}
                    </div>
                    <img src={this.props.rec.image} />
                </div>
                <div className="content">
                    {this.props.rec.text}
                </div>
                <Detail name={"Players"} value={this.props.rec.players} />
                <Detail name={"Playtime"} value={this.props.rec.time} />
            </div>
        );
    }
}