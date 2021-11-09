import { userCards, userPoints } from "../App";

export default function User() {

  let uCards = -50;

  return (
    <>
      <h5 className="text-white text-center mb-3">{`You: ${userPoints}`}</h5>
      <div className="d-flex cards">
        {userCards.map((card, index) => {
          uCards += 50;
          return (
            card !== undefined ?
            <div
              key={index}
              className={"card " + (card.color === 'red' ? 'text-danger' : 'text-dark')}
              style={{ left: uCards + "px" }}
            >
              <div className="card-front">
                <div className="align-self-start">{card.name.length > 1 ? card.name.slice(0, 1) : card.name}</div>
                <div className="align-self-center icon">{card.icon}</div>
                <div className="align-self-end">{card.name.length > 1 ? card.name.slice(0, 1) : card.name}</div>
              </div>
            </div>
            : null
          );
        })}
      </div>
    </>
  );
};