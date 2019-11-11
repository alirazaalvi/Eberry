import React from 'react';
import { cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from '../../testUtils/testingHelper';
import HotelsContainer from './HotelsContainer';

afterEach(cleanup);

test('should render default view', async () => {
    const { getByTestId } = renderWithRedux(<HotelsContainer />);

    expect(getByTestId('container')).toBeInTheDocument();
});

test('should render hotels', async () => {
    const { getAllByTestId } = renderWithRedux(<HotelsContainer />);

    const hotelListNode = await waitForElement(() => getAllByTestId('hotel-item'));

    expect(hotelListNode).toHaveLength(10);
});