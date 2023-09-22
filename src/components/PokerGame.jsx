import { useState } from "react";

const deck = [
  "2 of Spades",
  "2 of Hearts",
  "2 of Diamonds",
  "2 of Clubs",
  "3 of Spades",
  "3 of Hearts",
  "3 of Diamonds",
  "3 of Clubs",
  "4 of Spades",
  "4 of Hearts",
  "4 of Diamonds",
  "4 of Clubs",
  "5 of Spades",
  "5 of Hearts",
  "5 of Diamonds",
  "5 of Clubs",
  "6 of Spades",
  "6 of Hearts",
  "6 of Diamonds",
  "6 of Clubs",
  "7 of Spades",
  "7 of Hearts",
  "7 of Diamonds",
  "7 of Clubs",
  "8 of Spades",
  "8 of Hearts",
  "8 of Diamonds",
  "8 of Clubs",
  "9 of Spades",
  "9 of Hearts",
  "9 of Diamonds",
  "9 of Clubs",
  "10 of Spades",
  "10 of Hearts",
  "10 of Diamonds",
  "10 of Clubs",
  "Jack of Spades",
  "Jack of Hearts",
  "Jack of Diamonds",
  "Jack of Clubs",
  "Queen of Spades",
  "Queen of Hearts",
  "Queen of Diamonds",
  "Queen of Clubs",
  "King of Spades",
  "King of Hearts",
  "King of Diamonds",
  "King of Clubs",
  "Ace of Spades",
  "Ace of Hearts",
  "Ace of Diamonds",
  "Ace of Clubs",
];

const deckShuffle = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

const rankHand = (hand) => {
  return hand.map((card) => {
    const cardValue = parseInt(card);
    return isNaN(cardValue) ? 0 : cardValue;
  });
};

const PokerGame = () => {
  const [deckState, setDeckState] = useState(deckShuffle([...deck]));
  const [players, setPlayers] = useState([
    { id: 1, name: "Player 1", hand: [] },
    { id: 2, name: "Player 2", hand: [] },
  ]);
  const [winner, setWinner] = useState(null);

  const deal = () => {
    const newDeck = [...deckState];

    const updatedPlayers = players.map((player, index) => {
      const hand = newDeck.slice(index * 5, (index + 1) * 5);
      newDeck.splice(index * 5, 5);

      return { ...player, hand };
    });

    setPlayers(updatedPlayers);
    setDeckState(newDeck);
    setWinner(null);
    determineWinner(updatedPlayers);
  };

  const determineWinner = (playersIncluded) => {
    const playerHands = playersIncluded.map((player) => {
      const ranks = rankHand(player.hand);
      return { player, ranks };
    });

    const winningHand = playerHands.reduce((prev, current) => {
      for (let i = 0; i < prev.ranks.length; i++) {
        if (prev.ranks[i] > current.ranks[i]) {
          return prev;
        } else if (prev.ranks[i] < current.ranks[i]) {
          return current;
        }
      }
      return prev;
    });
    setWinner(winningHand.player);
  };

  return (
    <>
      <h1>TeachTown Poker Game</h1>
      <button onClick={deal}>Deal Cards</button>
      {players.map((player) => (
        <div key={player.id}>
          <h2>{player.name}</h2>
          <ol>
            {player.hand.map((card, index) => (
              <li key={index}>{card}</li>
            ))}
          </ol>
        </div>
      ))}
      {winner && (
        <div>
          <h2>{winner.name} is the winner!</h2>
        </div>
      )}
    </>
  );
};

export default PokerGame;
