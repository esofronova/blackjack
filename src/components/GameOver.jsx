import { gameOver, winner } from "../App";

export default function GameOver() {

  return (
    <div className={"overlay position-fixed centered w-100 h-100 " + (gameOver ? "" : "d-none")}>
      <div className="fs-1 bg-white p-4 rounded">
        <h3 className="text-center w-75 mx-auto text-dark">{winner}</h3>
        <div className="centered mt-3">
          <button
            className="btn btn-dark"
            onClick={() => {
              window.location.reload();
            }}
          >New Game</button>
        </div>
      </div>
    </div>
  );
};