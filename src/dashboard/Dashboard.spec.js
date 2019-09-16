import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';
import { reducer, initialState } from '../store/reducers';

function renderWithRedux(ui,
    { initialState, store = createStore(reducer, initialState) } = {}
) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store,
    }
}
test('Dashboard renders successfully', () => {
    renderWithRedux(<Dashboard />);
});

test('Dashboard shows controls and display', () => {
    const { getByText } = renderWithRedux(<Dashboard />);
    getByText(/unlocked/i);
    getByText(/lock gate/i);
});

test('Gate defaults to unlocked and open', () => {
    const { getByText } = renderWithRedux(<Dashboard />);

    getByText(/unlocked/i);
    getByText(/open/i);
})

test('Gate cannot open if locked', () => {
    const { getByText } = renderWithRedux(<Dashboard />);
    const openToggle = getByText(/close gate/i);
    const lockToggle = getByText(/lock gate/i);

    fireEvent.click(openToggle);
    fireEvent.click(lockToggle);

    const inActiveOpen = getByText(/closed/i);
    fireEvent.click(openToggle);
    const checkChange = getByText(/closed/i);

    expect(inActiveOpen).toBe(checkChange);
})