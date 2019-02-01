import React, { Component } from 'react';
import SwissPairing from 'swiss-pairing';
import Participant from './Participant'; 

const swiss = SwissPairing({
    maxPointsPerRound: 1,
    rematchWeight: 100,
    standingPower: 2,
    seedMultiplier: 6781
});

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

let matches = [
    {
      round: 1,
      home: { id: 'Meffe', points: 0 },
      away: { id: 'Hans', points: 0 }
    }];

class Tournament extends Component {

    constructor() {
        super();

        this.swiss = swiss;
        this.matchups = [];

        this.state = {
            round: 0,
            matchups: []
        }

        this.getMatchups = this.getMatchups.bind(this);
    }

    getMatchups() {

        let matchups = this.swiss.getMatchups(this.state.round +1, participants, []);
        
        this.setState({
            matchups: matchups,
            round: this.state.round + 1
        });
    }

    render() {
        return (
        <div>
            <button type="button" onClick={this.getMatchups}>GetMatchups</button>
           { this.state.round > 0 && 
                <h1>Round# {this.state.round}</h1> 
           }
           <ul>
           { this.state.matchups.map( (matchup, index) => {
               return (
                <li key={index}>
                    <Participant id={matchup.home}></Participant> vs <Participant id={matchup.away}></Participant>
                </li>
    
               )
           })}
           </ul>
           
        </div>
        );
    }


}

export default Tournament;