import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
      
        expect(asFragment()).toMatchSnapshot();
      });
})

// emoji test
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // arrange
        const {getByLabelText} = render(<Nav />);
        //assert
        //Here, we have used a custom matcher to compare the expected value to the one received by our query.
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

// links are visible
describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })