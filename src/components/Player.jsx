import { yourCards, setYourCards, yourPoints, setYourPoints } from "../App";

export default function Player() {

  let yCards = -50;

  return (
    <>
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
    </>
  );
};