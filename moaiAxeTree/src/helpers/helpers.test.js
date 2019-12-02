import { announceResult, genFeedbackMessage, chooseRobotItem } from './helpers';

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

describe('genFeedbackMessage function', () => {
  // Won, Lost, Tied, Waiting
  test('if status is "Won" returns "Good job!"', () => {
    const message = genFeedbackMessage('Won');
    expect(message).toBe('Good job!');
  });

  test('if status is "Lost" returns "Loser!!"', () => {
    const message = genFeedbackMessage("Lost");
    expect(message).toBe("Loser!!");
  });

  test('if status is "Tied" returns "Half a loser."', () => {
    const message = genFeedbackMessage("Tied");
    expect(message).toBe("Half a loser.");
  });

  test('if status is undefined returns "Don\'t be shy! We\'re not mean at all!"', () => {
    const message = genFeedbackMessage();
    expect(message).toBe("Don't be shy! We're not mean at all!");
  });
});

describe('chooseRobotItem function', () => {
  test('chooses a winning item if cheating is true', () => {
    const cheating = true;
    let playerSelection = 'Axe'
    let compSelection = chooseRobotItem(cheating, playerSelection);
    expect(compSelection).toEqual('Moai');

    playerSelection = "Tree";
    compSelection = chooseRobotItem(cheating, playerSelection);
    expect(compSelection).toEqual("Axe");

    playerSelection = "Moai";
    compSelection = chooseRobotItem(cheating, playerSelection);
    expect(compSelection).toEqual("Tree");
  });

  test('chooses a random item if cheating is false', () => {
    const cheating = false;
    const playerSelection = 'Tree';
    const compSelection = chooseRobotItem(cheating, playerSelection);
    const validOptions = ['Moai', 'Tree', 'Axe'];
    expect(validOptions.includes(compSelection)).toBeTruthy();
  });
});
