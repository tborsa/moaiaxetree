import React from 'react';
import {render, getByTestId} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Game from './Game';

describe('Game component', () => {

  test('Clicking the robot head toggles the cheating state', () => {
    const {getByTestId} = render(<Game></Game>);
    const robotHead = getByTestId('robo');
    //defualt robot is cheating
    expect(robotHead).toHaveClass('cheating');
    //expect to be cheating
    robotHead.click();
    expect(robotHead).not.toHaveClass('cheating');
  });

})