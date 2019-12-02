export const announceResult = (playerSelection, compSelection) => {
  const lookup = {
    'Axe': 'Tree',
    'Tree': 'Moai',
    'Moai': 'Axe'
  };
  if (!(playerSelection && compSelection)) {
    return 'Waiting';
  }
  if (lookup[playerSelection] === compSelection) {
    return 'Won';
  }
  if (lookup[compSelection] === playerSelection) {
    return 'Lost';
  }
  return 'Tied';
}

export const genFeedbackMessage = (status) => {
  const dict = {
    'Won': 'Good job!',
    'Lost': 'Loser!!',
    'Tied': 'Half a loser.',
  };
  return dict[status] ? dict[status] : `Don't be shy! We're not mean at all!`;
};

export const chooseRobotItem = (cheating, playerSelection) => {
  const lookup = {
    Tree: 'Axe',
    Moai: 'Tree',
    Axe: 'Moai'
  };
  if (cheating) {
    return lookup[playerSelection];
  }
  const validOptions = ["Moai", "Tree", "Axe"];
  return validOptions[Math.floor(Math.random() * validOptions.length)];
};
