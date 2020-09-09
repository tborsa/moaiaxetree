import React from 'react';

export default function Computer(props) {
  const {state, setState} = props;
  return (
    <section className="computer">
      <span
        onClick={() => setState((prev) => (
          {...prev, cheating: !prev.cheating}
        ))}
        className={state.cheating? 'cheating' : ''}
        role="img"
        data-testid="robo"
        aria-label="robot"
      >
        🤖
      </span>
      <div>
        <h1>{state.cheating ? "EXTERRMINATE !" : "Good game to you"}</h1>
        <div className="choices">
          <button>
            <span role="img" aria-label="moai">
              {state.compSelection === "Moai" ? "🗿" : " ? "}
            </span>
          </button>
          <button>
            <span role="img" aria-label="axe">
              {state.compSelection === "Axe" ? "🪓" : " ? "}
            </span>
          </button>
          <button>
            <span role="img" aria-label="tree">
              {state.compSelection === "Tree" ? "🌳" : " ? "}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
