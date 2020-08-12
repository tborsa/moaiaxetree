import { announceResult, roboThrow, displayStatus } from './helpers';

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

describe('roboThrow function', () => {
  test('returns a valid throw if robot is not cheating', () => {
    const cheating = false;
    const playerThrow = 'Axe';
    const result = roboThrow(cheating, playerThrow);
    const throws = ['Moai', 'Axe', 'Tree'];
    expect(throws.includes(result)).toBe(true);
  })

  test('returns a winning throw if robot is cheating', () => {

    const cheating = true;
    let playerThrow = 'Axe';
    let result = roboThrow(cheating, playerThrow);
    expect(result).toBe('Moai');

    playerThrow = 'Tree';
    result = roboThrow(cheating, playerThrow);
    expect(result).toBe('Axe');

    playerThrow = 'Moai';
    result = roboThrow(cheating, playerThrow);
    expect(result).toBe('Tree');

  })
})

describe('displayStatus function', () => {
  test('returns "...boooringg" when the result is "Tied"', () =>{
    const status = "Tied"
    const result = displayStatus(status);
    expect(result).toBe('...boooringg');
  })
  test('returns "ahha looser, do it the same but, uh, better." when the result is "Lost"', () =>{
    const status = "Lost"
    const result = displayStatus(status);
    expect(result).toBe('ahha looser, do it the same but, uh, better.');
  })
  test('returns "nice" when the result is "Won"', () =>{
    const status = "Won"
    const result = displayStatus(status);
    expect(result).toBe('nice');
  })
})