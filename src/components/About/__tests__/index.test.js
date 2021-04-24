//We need react to enable the components to function properly so we can test them.
import React from 'react';
// "render" the component.
import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
//we'll import the component we will be testing,
import About from '..';
//This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup)

describe('About component', () => {
    // renders About test
    //first test
    it('renders', () => {
        render(<About />);
    });

    // second test
    it('matches snapshot DOM node structure', () => {
        // render About
        const  { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})