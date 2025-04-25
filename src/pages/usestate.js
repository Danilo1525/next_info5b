import { useState } from "react";

export default function Usestate() {
  const [state, setState] = useState(0);

  function handleClick() {
    setState((prevState) => prevState + 1);
    console.log("state", state + 1);
  }

  return (
    <>
      <h1 className="text-center">useState</h1>
      Cliques {state} vezes <br />
      <button className="btn btn-dark" onClick={handleClick}>
        Clique aqui
      </button>
    </>
  );
}
