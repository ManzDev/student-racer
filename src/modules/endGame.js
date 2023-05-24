import confetti from "canvas-confetti";

const CONFETTI_OPTIONS = {
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
};

const resetButton = document.querySelector(".reset");

export function endGame(winner) {
  console.log("Ha ganado " + winner.alt);
  winner.classList.add("winner");
  confetti(CONFETTI_OPTIONS);
  resetButton.toggleAttribute("disabled");
}
