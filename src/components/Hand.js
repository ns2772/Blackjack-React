// src/components/Hand.js

import React from 'react';
import Card from './Card';

function Hand({ cards }) {
  return (
    <div className="hand">
      {cards.map((card, index) => (
        <Card key={index} image={card.image} value={card.value} suit={card.suit} />
      ))}
    </div>
  );
}

export default Hand;
