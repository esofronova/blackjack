import { useState } from "react";
import { dealerCards, setDealerCards, dealerPoints, setDealerPoints, dCards } from "../App";

export let cardsHidden, setCardsHidden;

export default function Dealer() {

  let dCards = -50;

  [cardsHidden, setCardsHidden] = useState(true);

  return (
    <>
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
                  {index === 0 || !cardsHidden ?
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
    </>
  );
};