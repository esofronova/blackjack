import { buttons, cards, chips } from './data';
import './style.scss';
import { useState } from 'react';

// TODO
// - gameOver
// - balance
// - start new game
// - splice cards from array
// - dealer points

export default function Blackjack() {

  document.title = "Blackjack";

  const getRandom = () => {
    let rand = Math.floor(Math.random() * (cards.length + 1));
    return rand
  };

  let [gameStarted, setGameStarted] = useState(false);
  let [gameOver, setGameOver] = useState(false);
  let [winner, setWinner] = useState(null);

  let [dealerCards, setDealerCards] = useState([]);
  let [yourCards, setYourCards] = useState([]);

  let [dealerPoints, setDealerPoints] = useState(0);
  let [yourPoints, setYourPoints] = useState(0);

  function addCard(player) {
    addToArr();

    function addToArr() {
      let card = `${player}Card`;
      card = getRandom();
      if (player === 'you') {
        yourCards.push(cards[card]);
        setYourCards([...yourCards]);
        setYourPoints(countPoints(yourCards));

      } else if (player === 'dealer') {
        dealerCards.push(cards[card]);
        setDealerCards([...dealerCards]);
        setDealerPoints(dealerCards[0].value);
        // cards.splice(cards.indexOf(cards[dealerCard]), 1);
      };
    };
  };

  function countPoints(arr) {
    let sum = 0;
    arr.forEach((card) => {
      if (card !== undefined) {
        sum += card.value;
      };
    });
    return sum;
  };

  setTimeout(() => {
    if (yourPoints === 21 || dealerPoints > 21) {
      setGameOver(true);
      setWinner("Congratulations! You're lucky today! :)");
    } else if (dealerPoints === 21 || yourPoints > 21) {
      setGameOver(true);
      setWinner("Dealer is the winner! Maybe next time!..")
    };
  }, 200);

  let [balance, setBalance] = useState(500);
  let [bet, setBet] = useState(0);

  let yCards = -50;
  let dCards = -50;

  return (
    <div className="blackjack py-5 h-100">
      <div className="d-flex text-white text-center h-100">

        <div className="col-4">
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
        </div>

        <div className="col-4">
          <div className="mb-5">
            <h5 className="text-white text-center mb-3">{`Dealer: ${dealerPoints}`}</h5>
            <div className="d-flex">
              <div className="card me-3 position-static col-3">
                <div className="card-back"></div>
              </div>
              <div className="d-flex cards col-9">
                {dealerCards.map((card, index) => {
                  dCards += 50;
                  return (
                    <div
                      key={index}
                      className={"card " + (card.color === 'red' ? 'text-danger' : 'text-dark')}
                      style={{ left: dCards + "px" }}
                    >
                      {index === 0 ?
                        <div className="card-front">
                          <div className="align-self-start">{card.name.length > 1 ? card.name.slice(0, 1) : card.name}</div>
                          <div className="align-self-center icon">{card.icon}</div>
                          <div className="align-self-end">{card.name.length > 1 ? card.name.slice(0, 1) : card.name}</div>
                        </div>
                        :
                        <div className="card-back"></div>
                      }
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="">
            <h5 className="text-white text-center mb-3">{`You: ${yourPoints}`}</h5>
            <div className="d-flex cards">
              {yourCards.map((card, index) => {
                yCards += 50;
                return (
                  <div
                    key={index}
                    className={"card " + (card.color === 'red' ? 'text-danger' : 'text-dark')}
                    style={{ left: yCards + "px" }}
                  >
                    <div className="card-front">
                      <div className="align-self-start">{card.name.length > 1 ? card.name.slice(0, 1) : card.name}</div>
                      <div className="align-self-center icon">{card.icon}</div>
                      <div className="align-self-end">{card.name.length > 1 ? card.name.slice(0, 1) : card.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="col-4 centered">
          <div className="mt-5 btns d-flex flex-column">
            {buttons.map((btn, index) => {
              return (
                <button
                  key={index}
                  disabled={btn === 'deal' && bet >= 25 ? false : gameStarted ? false : true}
                  className={"btn w-100 mb-3 text-uppercase btn-" + (btn === 'deal' ? 'primary' : btn === 'hit' ? 'success' : 'danger') + (` btn-${btn}`)}
                  onClick={() => {
                    if (btn === 'hit') {
                      addCard('you');
                    };
                    if (btn === 'stand') {
                      document.querySelector('.btn-hit').setAttribute("disabled", true);
                      addCard('dealer');
                      countPoints(dealerCards);
                    };
                    if (btn === 'deal') {
                      addCard('dealer');
                      addCard('dealer');
                      addCard('you');
                      addCard('you');
                      setGameStarted(true);
                      document.querySelector('.btn-deal').setAttribute("disabled", true);
                    };
                  }}
                >{btn}</button>
              );
            })}
          </div>
        </div>

      </div>

      <div className={"overlay position-fixed centered w-100 h-100 " + (gameOver ? "" : "d-none")}>
        <div className="fs-1 bg-white p-4 rounded">
          <h3 className="text-center w-75 mx-auto">{winner}</h3>
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
    </div>
  );
};