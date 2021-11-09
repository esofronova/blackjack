import { bet, gameStarted, setGameStarted, addCard, dealerPoints } from '../App';
import { buttons } from '../data';
import { setCardsHidden } from './Dealer';

export default function Buttons() {

  return (
    <>
      <div className="btns h-100 centered">
        {buttons.map((btn, index) => {
          return (
            <button
              key={index}
              disabled={btn === 'deal' && bet >= 25 ? false : gameStarted ? false : true}
              className={"btn w-100 mb-3 text-uppercase btn-" + (btn === 'deal' ? 'primary' : btn === 'hit' ? 'success' : 'danger') + (` btn-${btn}`)}
              style={{ maxWidth: "300px" }}
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
                  document.querySelector('.btn-stand').setAttribute("disabled", true);

                  let interval = setInterval(() => {
                    addCard('dealer');
                    if (dealerPoints >= 17) {
                      clearInterval(interval);
                    };
                  }, 1000);
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