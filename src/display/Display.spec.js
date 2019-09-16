import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('Display renders successfully', () => {
    render(<Display />);
});

test('Display renders if gate is locked/unlocked and open/closed', () => {
    render(<Display closed={true} locked={true} />);
    render(<Display closed={false} locked={true} />);
    render(<Display closed={true} locked={false} />);
    render(<Display closed={false} locked={false} />);
});

test('Displays closed if closed prop is true', () => {
    const { getByText } = render(<Display closed={true} />);
    getByText(/closed/i);
});

test('Displays open if closed prop is false', () => {
    const { getByText } = render(<Display closed={false} />);
    getByText(/open/i);
});

test('Displays locked if locked prop is true', () => {
    const { getByText } = render(<Display locked={true} />);
    getByText(/Locked/);
});

test('Displays unlock if locked prop is false', () => {
    const { getByText } = render(<Display locked={false} />);
    getByText(/unlocked/i);
});

