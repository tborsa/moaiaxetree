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

export const roboThrow = (cheating, playerThrow) => {
  const counterLookup = {
    'Axe': 'Moai',
    'Moai': 'Tree',
    'Tree': 'Axe'
  }
  if (cheating) {
    return counterLookup[playerThrow];
  } else {
    const options = ['Axe', 'Tree', 'Moai'];
    return options[Math.floor((Math.random() * options.length))];
  }
}

export const displayStatus = (result) => {
  switch (result){
    case ('Tied'):
      return '...boooringg';
    case('Lost'):
      return 'ahha looser, do it the same but, uh, better.';
    case('Won'):
      return 'nice';
    default:
      return 'uh oh';
  }
}
