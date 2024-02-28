// src/components/Card.js

import React from 'react';

function Card({ image, value, suit }) {
  return (
    <div className="card">
      <img src={image} alt={`${value} of ${suit}`} style={{ width: '100px' }} />
    </div>
  );
}

export default Card;
