import { chips } from '../data';
import { bet, setBet, balance, setBalance, gameStarted } from '../App';

export default function Bet() {

  return (
    <>
      <div className="h-100 d-flex flex-column justify-content-around py-3">
        <h2 className="mb-3">Min bet is $25</h2>
        <h2 className="mb-3">Bet: {`$${bet}`}</h2>
        <h2 className="mb-3">Balance: {`$${balance}`}</h2>
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
    </>
  );
};