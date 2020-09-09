import React, { useState, useEffect } from 'react';
import {roboThrow} from '../helpers/helpers.js';
import Computer from './Computer'
import Player from './Player'
import Result from './Result'

export default function Game(props) {
  const [state, setState] = useState({
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: true
  });

  useEffect(() => {
    setState((currentState) => {
      return {
        ...currentState,
        compSelection: roboThrow(currentState.cheating, currentState.playerSelection)
      }
    })
  }, [state.playerSelection]);
  
  return (
    <div>
    <main className="game">
      <Computer state={state} setState={setState}/>
      <Player state={state} setState={setState}/>
    </main>
      <Result status={state.status} />
    </div>
  );
}
