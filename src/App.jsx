import { cards } from './data';
import './style.scss';
import { useState } from 'react';
import Bet from './components/Bet';
import Dealer from './components/Dealer';
import User from './components/User';
import Buttons from './components/Buttons';
import GameOver from './components/GameOver';
import { Container, Row, Col } from 'react-bootstrap';

// TODO
// - splice cards from array
// responsiveness

export let
  bet, setBet, balance, setBalance, 
  gameStarted, setGameStarted, gameOver, setGameOver, winner, setWinner, winnerText, setWinnerText,
  dealerCards, setDealerCards, dealerPoints, setDealerPoints,
  userCards, setUserCards, userPoints, setUserPoints;

const getRandom = () => {
  let rand = Math.floor(Math.random() * (cards.length + 1));
  return rand
};

const countPoints = arr => {
  let sum = 0;
  arr.forEach((card) => {
    if (card !== undefined) {
      sum += card.value;
    };
  });
  return sum;
};

export const addCard = player => {
  addToArr();
  function addToArr() {
    let card = `${player}Card`;
    card = getRandom();
    if (player === 'you') {
      userCards.push(cards[card]);
      setUserCards([...userCards]);
      setUserPoints(countPoints(userCards));
    } else if (player === 'dealer') {
      dealerCards.push(cards[card]);
      setDealerCards([...dealerCards]);
      setDealerPoints(countPoints(dealerCards));

      // cards.splice(cards.indexOf(cards[dealerCard]), 1);
    };
  };
};

export const startNewGame = () => {
  if (winner === 'User') {
    setBalance(balance + (bet * 2));
  };
  
  setGameOver(false);
  setBet(0);
  setDealerPoints(0);
  setUserPoints(0);
  setDealerCards([]);
  setUserCards([]);
  setGameStarted(false);
};

export default function Blackjack() {
  document.title = "Blackjack";

  [balance, setBalance] = useState(500);
  [bet, setBet] = useState(0);

  [gameStarted, setGameStarted] = useState(false);
  [gameOver, setGameOver] = useState(false);
  [winner, setWinner] = useState(null);
  [winnerText, setWinnerText] = useState('');

  [dealerCards, setDealerCards] = useState([]);
  [userCards, setUserCards] = useState([]);

  [dealerPoints, setDealerPoints] = useState(0);
  [userPoints, setUserPoints] = useState(0);

  setTimeout(() => {
    if (userPoints === 21 || dealerPoints > 21) {
      setGameOver(true);
      setWinner('User');
      setWinnerText("Congratulations! You're lucky today! :)");
    } else if (dealerPoints === 21 || userPoints > 21) {
      setGameOver(true);
      setWinner('Dealer');
      setWinnerText("Dealer is the winner! Maybe next time!..")
    };
  }, 200);

  return (
    <div className="blackjack py-5 h-100">
      <Container fluid className="h-100">
        <Row className="d-flex text-white text-center h-100">
          <Col xs={4} lg={4}><Bet /></Col>
          <Col xs={4} lg={4}>
            <Row>
              <Col xs={12}><Dealer /></Col>
              <Col xs={12}><User /></Col>
            </Row>
          </Col>
          <Col xs={4} lg={4}><Buttons /></Col>
          { gameOver ? <GameOver /> : null }
        </Row>
      </Container>
    </div>
  );
};