import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from './testUtils/testingHelper';
import App from './App';

afterEach(cleanup);

test('should render default view', async () => {
    const { getByTestId } = renderWithRedux(<App />);

    expect(getByTestId('app')).toBeInTheDocument();
});