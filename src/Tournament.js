import React, { Component } from 'react';
import SwissPairing from 'swiss-pairing';
import Participant from './Participant'; 

import { AppConsumer } from './AppProvider';


const swiss = SwissPairing({
    maxPointsPerRound: 1,
    rematchWeight: 100,
    standingPower: 2,
    seedMultiplier: 6781
});

class Tournament extends Component {

    constructor() {
        super();

        this.swiss = swiss;
        this.matchups = [];

        this.state = {
            round: 0,
            matchups: []
        }

        //this.getMatchups = this.getMatchups.bind(this);
    }

    getMatchups(participants) {

       let matchups = this.swiss.getMatchups(this.state.round +1, participants, []);
        console.log(matchups)
        this.setState({
            matchups: this.state.matchups.concat(matchups),
            round: this.state.round + 1
        });
    }

    render() {
        return (
            <AppConsumer>             
                {({ participants, getPlayer}) => (
                    <React.Fragment>
                        <ul>
                        {participants.map( participant => {
                            return (
                                <li key={participant.id}>
                                    <Participant data={participant}></Participant>
                                </li>
                            )
                        })}
                        </ul>
                
                        <button type="button" onClick={ () => { this.getMatchups(participants)} }>Get matchups</button>

                        <h2>Matchups - round {this.state.round}</h2>
                        {
                            this.state.matchups.map( (matchup, index) => {
                                
                                return (
                                    <React.Fragment key={index}>
                                        <Participant data={getPlayer(matchup.home)}></Participant>
                                        vs
                                        <Participant data={getPlayer(matchup.away)}></Participant>
                                    </React.Fragment>
                                )
                                    
                            })
                        }

                    </React.Fragment>
                )
            }
            
            </AppConsumer>
        );
    }


}

export default Tournament;