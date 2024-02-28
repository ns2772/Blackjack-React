// src/App.js

import React, { useState, useEffect } from 'react';
import { initializeDeck, drawCards } from './api/DeckAPI';
import Hand from './components/Hand';
import GameStatus from './components/GameStatus';
import { calculateHandValue } from './utils/utils';
import './App.css';

function App() {
  const [deckId, setDeckId] = useState('');
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [gameStatus, setGameStatus] = useState('');

  // Initialize deck and deal initial hands
  useEffect(() => {
    async function setupGame() {
      const deckId = await initializeDeck();
      setDeckId(deckId);
      const playerCards = await drawCards(deckId, 2);
      const dealerCards = await drawCards(deckId, 2);
      setPlayerHand(playerCards);
      setDealerHand(dealerCards);
    }

    setupGame();
  }, []);

  // Player action: hit
  const handleHit = async () => {
    const newCards = await drawCards(deckId, 1);
    const updatedHand = [...playerHand, ...newCards];
    setPlayerHand(updatedHand);
    if (calculateHandValue(updatedHand) > 21) {
      setGameStatus('Bust! You lose.');
    }
  };

  // Player action: stand
  const handleStand = () => {
    const playerScore = calculateHandValue(playerHand);
    const dealerScore = calculateHandValue(dealerHand);
    if (playerScore > dealerScore || dealerScore > 21) {
      setGameStatus('You win!');
    } else if (playerScore < dealerScore) {
      setGameStatus('You lose.');
    } else {
      setGameStatus('Tie.');
    }
  };

  return (
    <div className="app">
      <h1>Blackjack</h1>
      <div className="game-board">
        <div>
          <h2>Dealer's Hand</h2>
          <Hand cards={dealerHand} />
        </div>
        <div>
          <h2>Your Hand</h2>
          <Hand cards={playerHand} />
          <button onClick={handleHit} disabled={gameStatus !== ''}>Hit</button>
          <button onClick={handleStand} disabled={gameStatus !== ''}>Stand</button>
        </div>
      </div>
      <GameStatus status={gameStatus} />
    </div>
  );
}

export default App;
