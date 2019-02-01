
import { createAction, createReducer } from 'redux-starter-kit';

const incrementRound = createAction('round/increment');
const decrementRound = createAction('round/decrement');

const roundReducer = createReducer([], {

    [incrementRound]: (state, action) => state + action.payload,
    [decrementRound]: (state, action) => state - action.payload
});

export default roundReducer;