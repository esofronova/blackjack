import { getRandom, bet, gameStarted, setGameStarted, dealerCards, addCard, countPoints } from '../App';
import { buttons } from '../data';

export default function Rightbar() {

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
    </>
  );
};