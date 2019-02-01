import React, { Component } from 'react';

let participants = [
    {
        id: 1,
        name: 'Meffe',
        seed: 100
    },
    {
        id: 2,
        name: 'Hans',
        seed: 100
    },
    {
        id: 3,
        name: 'Jensen',
        seed: 100
    },
    {
        id: 4,
        name: 'Kalle',
        seed: 100
    }
]
class Participant extends Component {

    lookupName(id) {

        let found = participants.find( participant => {
            return participant.id === id;
        });

        return found.name;
    }

    render() {
        console.log(this.props)
        return (
        <React.Fragment>
            {this.lookupName(this.props.id)}
        </React.Fragment>
        );
    }
}

export default Participant;
