// src/api/DeckAPI.js

const BASE_URL = 'https://deckofcardsapi.com/api/deck';

// Initializes a new deck and returns the deck ID
async function initializeDeck() {
  const response = await fetch(`${BASE_URL}/new/shuffle/?deck_count=1`);
  const data = await response.json();
  return data.deck_id;
}

// Draws a specified number of cards from the deck
async function drawCards(deckId, count) {
  const response = await fetch(`${BASE_URL}/${deckId}/draw/?count=${count}`);
  const data = await response.json();
  return data.cards;
}

export { initializeDeck, drawCards };
