import { bet, gameStarted, setGameStarted, addCard } from '../App';
import { buttons } from '../data';
import { setCardsHidden } from './Dealer';

export default function Buttons() {

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
                  addCard('you');
                };
                if (btn === 'stand') {
                  document.querySelector('.btn-hit').setAttribute("disabled", true);
                  addCard('dealer');
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