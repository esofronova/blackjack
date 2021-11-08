import { getRandom, bet, gameStarted, setGameStarted, dealerCards, addCard, countPoints, setDealerPoints, dealerPoints, gameOver, setGameOver, yourPoints, setWinner } from '../App';
import { buttons } from '../data';
import { cardsHidden, setCardsHidden } from './Dealer';

export default function Buttons() {

  const checkWinner = player => {
    if (`${player}Points` === 21) {
      setWinner(`Congratulations! ${player} is the winner!`);
      setGameOver(true);
    } else if (`${player}Points` > 21) {
      setWinner("Maybe next time! :(")
      setGameOver(true);
    } else {
      addCard(player);
    };
  };

  return (
    <>
      <div className="mt-5 btns d-flex flex-column">
        {buttons.map((btn, index) => {
          return (
            <button
              key={index}
              disabled={btn === 'deal' && bet >= 25 ? false : gameStarted ? false : true}
              className={"btn w-100 mb-3 text-uppercase btn-" + (btn === 'deal' ? 'primary' : btn === 'hit' ? 'success' : 'danger') + (` btn-${btn}`)}
              onClick={() => {
                if (btn === 'deal') {
                  addCard('dealer');
                  addCard('dealer');
                  addCard('you');
                  addCard('you');
                  setGameStarted(true);
                  document.querySelector('.btn-deal').setAttribute("disabled", true);
                };
                if (btn === 'hit') {
                  // if (yourPoints === 21) {
                  //   setWinner("Congratulations! You are the winner!");
                  //   setGameOver(true);
                  // } else if (yourPoints > 21) {
                  //   setWinner("Maybe next time! :(")
                  //   setGameOver(true);
                  // } else {
                  //   addCard('you');
                  // };

                  // checkWinner('you');
                };
                if (btn === 'stand') {
                  document.querySelector('.btn-hit').setAttribute("disabled", true);
                  // if (dealerPoints >= 21) {
                  //   setGameOver(true);
                  // } else if (dealerPoints < 20) {
                  //   addCard('dealer');
                  // };

                  checkWinner('dealer');
                  setCardsHidden(false);
                };
              }}
            >{btn}</button>
          );
        })}
      </div>
    </>
  );
};