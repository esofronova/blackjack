import { winnerText, startNewGame } from "../App";

export default function GameOver() {

  return (
    <div className="overlay position-fixed centered w-100 h-100">
      <div className="fs-1 bg-white p-4 rounded">
        <h3 className="text-center w-75 mx-auto text-dark">{winnerText}</h3>
        <div className="centered mt-3">
          <button
            className="btn btn-dark new-game"
            onClick={startNewGame}
          >New Game</button>
        </div>
      </div>
    </div>
  );
};