import { buttons, cards, chips } from './data';
import './style.scss';
import { useState } from 'react';
import Leftbar from './components/Leftbar';
import Dealer from './components/Dealer';
import Player from './components/Player';
import Buttons from './components/Buttons';
import GameOver from './components/GameOver';
import { Container, Row, Col } from 'react-bootstrap';

// TODO
// - gameOver
// - balance
// - start new game
// - splice cards from array
// - dealer points

export let
  bet, setBet, balance, setBalance, 
  gameStarted, setGameStarted,gameOver, setGameOver, winner, setWinner,
  dealerCards, setDealerCards, dealerPoints, setDealerPoints,
  yourCards, setYourCards, yourPoints, setYourPoints
  ;

export const getRandom = () => {
  let rand = Math.floor(Math.random() * (cards.length + 1));
  return rand
};

export const addCard = player => {
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
      // setDealerPoints(dealerCards[0].value);
      setDealerPoints(countPoints(dealerCards));

      // cards.splice(cards.indexOf(cards[dealerCard]), 1);
    };
  };
};

export const countPoints = arr => {
  let sum = 0;
  arr.forEach((card) => {
    if (card !== undefined) {
      sum += card.value;
    };
  });
  return sum;
};

export default function Blackjack() {

  document.title = "Blackjack";

  [gameStarted, setGameStarted] = useState(false);
  [gameOver, setGameOver] = useState(false);
  [winner, setWinner] = useState(null);

  [dealerCards, setDealerCards] = useState([]);
  [yourCards, setYourCards] = useState([]);

  [dealerPoints, setDealerPoints] = useState(0);
  [yourPoints, setYourPoints] = useState(0);

  console.log(dealerPoints);

  // setTimeout(() => {
  //   if (yourPoints === 21 || dealerPoints > 21) {
  //     setGameOver(true);
  //     setWinner("Congratulations! You're lucky today! :)");
  //   } else if (dealerPoints === 21 || yourPoints > 21) {
  //     setGameOver(true);
  //     setWinner("Dealer is the winner! Maybe next time!..")
  //   };
  // }, 200);

  [balance, setBalance] = useState(500);
  [bet, setBet] = useState(0);

  return (
    <div className="blackjack py-5 h-100">
      <Container fluid className="h-100">
        <Row className="d-flex text-white text-center h-100">
          <Col xs={4} lg={4}><Leftbar /></Col>
          <Col xs={4} lg={4}>
            <Row>
              <Col xs={12}><Dealer /></Col>
              <Col xs={12}><Player /></Col>
            </Row>
          </Col>
          <Col xs={4} lg={4}><Buttons /></Col>
          <GameOver />
        </Row>
      </Container>
    </div>
  );
};