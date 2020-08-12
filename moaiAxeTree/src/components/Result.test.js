import React from 'react';
import {render, getByTestId} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Result from './Result';

describe('Result component', () => {

  test('With a game result "Tied" the Result component displays a correct status', () => {
    //tied condition
    const state = {
      status: 'Tied'
    }
    const {container, getByText} = render(<Result status={state.status}></Result>);
    const status = getByText('...boooringg');
  });

  test('With a game result "Lost" the Result component displays a correct status', () => {
    //lost condition
    const state = {
      status: 'Lost'
    }
    const {container, getByText} = render(<Result status={state.status}></Result>);
    const status = getByText('ahha looser, do it the same but, uh, better.');
  });

  test('With a game result "Won" the Result component displays a correct status', () => {
    //win condition
    const state = {
      status: 'Won'
    }
    const {container, getByText} = render(<Result status={state.status}></Result>);
    const status = getByText('nice');
  });

})