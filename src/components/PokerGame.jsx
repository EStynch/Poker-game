import { useState } from "react";

const deck = [
  "2 Spades",
  "2 Hearts",
  "2 Diamonds",
  "2 Clubs",
  "3 Spades",
  "3 Hearts",
  "3 Diamonds",
  "3 Clubs",
  "4 Spades",
  "4 Hearts",
  "4 Diamonds",
  "4 Clubs",
  "5 Spades",
  "5 Hearts",
  "5 Diamonds",
  "5 Clubs",
  "6 Spades",
  "6 Hearts",
  "6 Diamonds",
  "6 Clubs",
  "7 Spades",
  "7 Hearts",
  "7 Diamonds",
  "7 Clubs",
  "8 Spades",
  "8 Hearts",
  "8 Diamonds",
  "8 Clubs",
  "9 Spades",
  "9 Hearts",
  "9 Diamonds",
  "9 Clubs",
  "10 Spades",
  "10 Hearts",
  "10 Diamonds",
  "10 Clubs",
  "Jack Spades",
  "Jack Hearts",
  "Jack Diamonds",
  "Jack Clubs",
  "Queen Spades",
  "Queen Hearts",
  "Queen Diamonds",
  "Queen Clubs",
  "King Spades",
  "King Hearts",
  "King Diamonds",
  "King Clubs",
  "Ace Spades",
  "Ace Hearts",
  "Ace Diamonds",
  "Ace Clubs",
];

const deckShuffle = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

const PokerGame = () => {
  const [deckState, setDeckState] = useState(deckShuffle([...deck]));
  const [players, setPlayers] = useState([
    { id: 1, name: "Player 1", hand: [] },
    { id: 2, name: "Player 2", hand: [] },
  ]);
  return (
    <>
      <h1>TeachTown Poker Game</h1>
      <h2>{deck}</h2>
    </>
  );
};

export default PokerGame;
