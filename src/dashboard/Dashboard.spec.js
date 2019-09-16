import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';

test('Dashboard renders successfully', () => {
    render(<Dashboard />);
});

test('Dashboard shows controls and display', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/unlocked/i);
    getByText(/lock gate/i);
});

test('Gate defaults to unlocked and open', () => {
    const { getByText } = render(<Dashboard />);

    getByText(/unlocked/i);
    getByText(/open/i);
})

test('Gate cannot open if locked', () => {
    const { getByText } = render(<Dashboard />);
    const openToggle = getByText(/close gate/i);
    const lockToggle = getByText(/lock gate/i);

    fireEvent.click(openToggle);
    fireEvent.click(lockToggle);

    const inActiveOpen = getByText(/closed/i);
    fireEvent.click(openToggle);
    const checkChange = getByText(/closed/i);

    expect(inActiveOpen).toBe(checkChange);
})