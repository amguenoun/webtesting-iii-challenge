import { TOGGLE_LOCKED, TOGGLE_CLOSED } from '../actions'

export const initialState = {
    locked: false,
    closed: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CLOSED:
            return {
                ...state,
                closed: !state.closed
            };
        case TOGGLE_LOCKED:
            return {
                ...state,
                locked: !state.locked
            };
        default:
            return state;
    }
}