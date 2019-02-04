import React, { Component } from 'react';

import './Participant.css';

class Participant extends Component {

    render() {
        return (
        <div className="participant">
            <div>
                <span className="participant__label">Name:</span> {this.props.data.name}
            </div>
            <div>
                <span className="participant__label">Deck:</span> {this.props.data.deckName}
            </div>
        </div>
        );
    }
}

export default Participant;
