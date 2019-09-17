export const TOGGLE_LOCKED = 'TOGGLE_LOCKED';
export const TOGGLE_CLOSED = 'TOGGLE_CLOSED';

export const toggleLocked = () => {
    return ({ type: TOGGLE_LOCKED });
}

export const toggleClosed = () => {
    return ({ type: TOGGLE_CLOSED });
}