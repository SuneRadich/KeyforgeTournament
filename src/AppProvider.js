import React, { Component } from 'react';

const AppContext = React.createContext()

const participants = [
    {
        id: 1,
        name: 'Meffe',
        seed: 100,
        deckName: "Abraham Holodeck"
    },
    {
        id: 2,
        name: 'Hans',
        seed: 100,
        deckName: "No nonsens decko"
    },
    {
        id: 3,
        name: 'Jensen',
        seed: 100,
        deckName: "Jumpion Major Tom"
    },
    {
        id: 4,
        name: 'Kalle',
        seed: 100,
        deckName: "Oh so malloy"
    }
];

const matches = [];

class AppProvider extends Component {
    
    state = {
        participants: participants,
        matches: matches,
        getPlayer: id => {
            return this.getPlayer(id);
        }
    }

    /**
     * 
     * @param {int} id 
     */
    getPlayer(id) {
        
        let found = this.state.participants.find( player => {
            return player.id === id;
        });

        if (found) {
            return found;
        }
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
  }

  export const AppConsumer = AppContext.Consumer;

  export default AppProvider;