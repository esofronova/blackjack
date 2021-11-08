import { chips } from '../data';
import { bet, setBet, balance, setBalance, gameStarted, setGameStarted } from '../App';

export default function Bet() {

  return (
    <>
      <div className="h-100 d-flex flex-column justify-content-around py-3">
        <h2>Min bet is $25</h2>
        <div>
          <h2>Bet</h2>
          <h1>{`$ ${bet}`}</h1>
        </div>
        <div className="centered">
          <div className="mb-4">
            <h2>Balance</h2>
            <h1>{`$ ${balance}`}</h1>
          </div>
          <div className="d-flex justify-content-around gap-2 w-75 mx-auto">
            {chips.map((chip, index) => {
              return (
                <button
                  key={index}
                  disabled={gameStarted ? true : false}
                  className={"btn rounded-circle p-1 text-white border border-dark chip " + (chip === 5 ? "btn-success" : chip === 25 ? "btn-primary" : chip === 50 ? "btn-warning" : "btn-danger")}
                  onClick={() => {
                    if (balance >= chip) {
                      setBet(bet + chip);
                      setBalance(balance - chip);
                    };
                  }}
                >{chip}</button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};