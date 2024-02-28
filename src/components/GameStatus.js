// src/components/GameStatus.js

import React from 'react';

function GameStatus({ status }) {
  return (
    <div className="game-status">
      {status && <h2>{status}</h2>}
    </div>
  );
}

export default GameStatus;
