import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

test('Controls renders successfully', () => {
    render(<Controls />);
});

test('Controls has buttons displaying', () => {
    const { getByText } = render(<Controls />);
    getByText(/lock gate/i);
    getByText(/close gate/i);
});

test('Open/Close button text change on click', () => {
    const toggleClosed = jest.fn();

    const { getByText } = render(<Controls toggleClosed={toggleClosed} closed={false} />);
    const openToggle = getByText(/close gate/i);

    fireEvent.click(openToggle);

    expect(toggleClosed).toHaveBeenCalled();
});

test('Lock/Unlock button text change on click', () => {
    const toggleLocked = jest.fn();

    const { getByText } = render(<Controls toggleLocked={toggleLocked} locked={true} closed={true} />);
    const lockToggle = getByText(/unlock gate/i);

    fireEvent.click(lockToggle);
    expect(toggleLocked).toHaveBeenCalled();
});

test('closed toggle button is disabled if gate is locked', () => {
    const toggleClosed = jest.fn();

    const { getByText } = render(<Controls toggleClosed={toggleClosed} closed={true} locked={true} />);
    const openToggle = getByText(/open gate/i);

    fireEvent.click(openToggle);

    expect(toggleClosed).not.toHaveBeenCalled();
});

test('locked toggle button is disabled if gate is open', () => {
    const toggleLocked = jest.fn();

    const { getByText } = render(<Controls toggleLocked={toggleLocked} closed={false} locked={false} />);
    const lockToggle = getByText(/lock gate/i);

    fireEvent.click(lockToggle);

    expect(toggleLocked).not.toHaveBeenCalled();
});