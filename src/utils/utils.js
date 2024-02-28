// src/utils/utils.js

function calculateHandValue(cards) {
  let value = 0;
  let aces = 0;

  cards.forEach(card => {
    if (card.value === "ACE") {
      aces += 1;
      value += 11;
    } else if (["JACK", "QUEEN", "KING"].includes(card.value)) {
      value += 10;
    } else {
      value += parseInt(card.value);
    }
  });

  while (value > 21 && aces > 0) {
    value -= 10;
    aces -= 1;
  }

  return value;
}

export { calculateHandValue };
