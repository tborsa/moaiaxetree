import { announceResult, chooseRobotItem } from './helpers';

describe('announceResult function', () => {  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    const playerSelection = 'Axe';
    const compSelection = 'Tree';
    expect(announceResult(playerSelection, compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    const playerSelection = 'Axe';
    const compSelection = 'Axe';
    expect(announceResult(playerSelection, compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    const playerSelection = 'Axe';
    const compSelection = 'Moai';
    expect(announceResult(playerSelection, compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});
